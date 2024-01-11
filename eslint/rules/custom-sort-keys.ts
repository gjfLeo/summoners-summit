import type { TSESLint } from "@typescript-eslint/utils";
import { TSESTree } from "@typescript-eslint/utils";
import { createEslintRule } from "../utils";

export const RULE_NAME = "custom-sort-keys";
export type MessageIds = "object-keys-error";
export type Options = { orderedKeys: string[] }[];

function getOrderFunction(orderedKeys: Array<string> | undefined): (a: string, b: string) => boolean {
  return (a: string, b: string) => {
    if (orderedKeys) {
      const isAOrderedKeys = orderedKeys.includes(a);
      const isBOrderedKeys = orderedKeys.includes(b);

      if (isAOrderedKeys && !isBOrderedKeys) {
        return true;
      }

      if (!isAOrderedKeys && isBOrderedKeys) {
        return false;
      }

      if (isAOrderedKeys && isBOrderedKeys) {
        return orderedKeys.indexOf(a) <= orderedKeys.indexOf(b);
      }
    }

    return true;
  };
}

type TNodeStack<TType> = {
  name?: string;
  node?: TType;
  upper?: TNodeStack<TType>;
} | undefined;

function getFixer<TMessageIds extends string, TOptions extends readonly unknown[], TProperty extends TSESTree.Node>(node: TProperty, nodeStack: TNodeStack<TProperty>, context: TSESLint.RuleContext<TMessageIds, TOptions>) {
  return (fixer: TSESLint.RuleFixer) => {
    const fixes: Array<TSESLint.RuleFix> = [];

    if (!nodeStack?.node) {
      return fixes;
    }

    const sourceCode = context.getSourceCode();
    swapProperty<TProperty>(sourceCode, fixes, fixer, node, nodeStack.node);

    return fixes;
  };
}

function swapProperty<TProperty extends TSESTree.Node>(sourceCode: Readonly<TSESLint.SourceCode>, fixes: Array<TSESLint.RuleFix>, fixer: TSESLint.RuleFixer, fromNode: TProperty, toNode: TProperty): void {
  const fromNodeRange = getNodeRange(fromNode);
  const fromNodeComma = getComma(fromNode);

  const toNodeRange = getNodeRange(toNode);
  const toNodeComma = getComma(toNode);

  if (!!fromNodeComma !== !!toNodeComma) {
    if (fromNodeComma) {
      const commaRange = {
        end: sourceCode.getIndexFromLoc(fromNodeComma.loc.end),
        start: sourceCode.getIndexFromLoc(fromNodeComma.loc.start),
      };

      fromNodeRange.end = Math.max(fromNodeRange.end, commaRange.end);

      const toNodeLastToken = sourceCode.getLastToken(toNode);
      if (!toNodeLastToken) {
        return;
      }
      const commaPosition = sourceCode.getIndexFromLoc(toNodeLastToken.loc.end);

      const fromNodeCodeBeforeComma = sourceCode.text.slice(fromNodeRange.start, commaRange.start);
      const fromNodeCodeAfterComma = sourceCode.text.slice(commaRange.end, fromNodeRange.end);

      const toNodeCodeBeforeComma = sourceCode.text.slice(toNodeRange.start, commaPosition);
      const toNodeCodeAfterComma = sourceCode.text.slice(commaPosition, toNodeRange.end);

      fixes.push(fixer.replaceTextRange([commaRange.end, fromNodeRange.end], toNodeCodeAfterComma));
      fixes.push(fixer.replaceTextRange([fromNodeRange.start, commaRange.start], toNodeCodeBeforeComma));
      fixes.push(fixer.replaceTextRange([commaPosition, toNodeRange.end], fromNodeCodeAfterComma));
      fixes.push(fixer.replaceTextRange([toNodeRange.start, commaPosition], fromNodeCodeBeforeComma));
    }
    else if (toNodeComma) {
      const commaRange = {
        end: sourceCode.getIndexFromLoc(toNodeComma.loc.end),
        start: sourceCode.getIndexFromLoc(toNodeComma.loc.start),
      };

      toNodeRange.end = Math.max(toNodeRange.end, commaRange.end);

      const fromNodeLastToken = sourceCode.getLastToken(fromNode);
      if (!fromNodeLastToken) {
        return;
      }
      const commaPosition = sourceCode.getIndexFromLoc(fromNodeLastToken.loc.end);

      const fromNodeCodeBeforeComma = sourceCode.text.slice(fromNodeRange.start, commaPosition);
      const fromNodeCodeAfterComma = sourceCode.text.slice(commaPosition, fromNodeRange.end);

      const toNodeCodeBeforeComma = sourceCode.text.slice(toNodeRange.start, commaRange.start);
      const toNodeCodeAfterComma = sourceCode.text.slice(commaRange.end, toNodeRange.end);

      fixes.push(fixer.replaceTextRange([commaPosition, fromNodeRange.end], toNodeCodeAfterComma));
      fixes.push(fixer.replaceTextRange([fromNodeRange.start, commaPosition], toNodeCodeBeforeComma));
      fixes.push(fixer.replaceTextRange([commaRange.end, toNodeRange.end], fromNodeCodeAfterComma));
      fixes.push(fixer.replaceTextRange([toNodeRange.start, commaRange.start], fromNodeCodeBeforeComma));
    }
  }
  else {
    const fromNodeCode = sourceCode.text.slice(fromNodeRange.start, fromNodeRange.end);
    const toNodeCode = sourceCode.text.slice(toNodeRange.start, toNodeRange.end);

    fixes.push(fixer.replaceTextRange([fromNodeRange.start, fromNodeRange.end], toNodeCode));
    fixes.push(fixer.replaceTextRange([toNodeRange.start, toNodeRange.end], fromNodeCode));
  }

  function getNodeRange(node: TProperty) {
    let nextToken = sourceCode.getTokenAfter(node);

    if (nextToken && nextToken.type === "Punctuator" && nextToken.value === ",") {
      nextToken = sourceCode.getTokenAfter(nextToken);
    }

    const prevToken = sourceCode.getTokenBefore(node);

    if (!prevToken || !nextToken) {
      throw new Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
    }

    const nodeLoc = {
      end: sourceCode.getLastToken(node)?.loc.end,
      start: sourceCode.getFirstToken(node)?.loc.start,
    };

    if (!nodeLoc.start || !nodeLoc.end) {
      throw new Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
    }

    let start;

    if (prevToken.loc.end.line === nodeLoc.start.line) {
      start = sourceCode.getIndexFromLoc(nodeLoc.start);
    }
    else {
      start = sourceCode.lineStartIndices[prevToken.loc.end.line];
    }

    let end;
    if (nextToken.loc.start.line === nodeLoc.end.line) {
      end = sourceCode.getIndexFromLoc(nodeLoc.end);
    }
    else {
      end = sourceCode.lineStartIndices[node.loc.end.line];
    }

    if (node.type === TSESTree.AST_NODE_TYPES.TSPropertySignature) {
      start = node.key.range[0];
      end = node.typeAnnotation?.range[1] || node.key.range[1];
    }

    return { end, start };
  }

  function getComma(node: TProperty) {
    const nextToken = sourceCode.getTokenAfter(node);
    if (nextToken && nextToken.type === "Punctuator" && nextToken.value === ",") {
      return nextToken;
    }
  }
}

function getPropertyName<TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>(node: TProperty): string | undefined {
  switch (node.key.type) {
    case "Literal":
      return String(node.key.value);
    case "TemplateLiteral":
      if (node.key.expressions.length === 0 && node.key.quasis.length === 1) {
        return node.key.quasis[0].value.cooked || undefined;
      }
      break;
    case "Identifier":
      if (!node.computed) {
        return node.key.name;
      }
      break;
  }
}

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Require object keys to be sorted with custom order",
      recommended: false,
    },
    fixable: "code",
    schema: [
      {
        additionalProperties: false,
        properties: {
          orderedKeys: {
            type: "array",
          },
        },
        type: "object",
      },
    ],
    messages: {
      "object-keys-error": "Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'.",
    },
  },
  defaultOptions: [],
  create: (context: TSESLint.RuleContext<MessageIds, Options>): TSESLint.RuleListener => {
    let nodeStack: TNodeStack<TSESTree.Property>;

    const isInOrder = getOrderFunction(context.options[0]?.orderedKeys);

    return {
      ObjectExpression() {
        nodeStack = {
          name: undefined,
          node: undefined,
          upper: nodeStack,
        };
      },
      "ObjectExpression:exit": function () {
        if (!nodeStack) {
          return;
        }

        nodeStack = nodeStack.upper;
      },
      ObjectPattern() {
        nodeStack = {
          name: undefined,
          node: undefined,
          upper: nodeStack,
        };
      },
      "ObjectPattern:exit": function () {
        if (!nodeStack) {
          return;
        }

        nodeStack = nodeStack.upper;
      },
      Property(node) {
        if (!nodeStack) {
          return;
        }

        const prevNodeStack: TNodeStack<TSESTree.Property> = {
          name: nodeStack.name,
          node: nodeStack.node,
          upper: nodeStack,
        };

        const thisName = getPropertyName(node);

        if (thisName) {
          nodeStack.name = thisName;
          nodeStack.node = node || prevNodeStack.node;
        }

        if (!prevNodeStack.name || !thisName) {
          return;
        }

        if (!isInOrder(prevNodeStack.name, thisName)) {
          if (!node.key.loc) {
            return;
          }

          context.report({
            data: {
              prevName: prevNodeStack.name,
              thisName,
            },
            fix: getFixer(node, prevNodeStack, context),
            loc: node.key.loc,
            messageId: "object-keys-error",
            node,
          });
        }
      },
    };
  },
});
