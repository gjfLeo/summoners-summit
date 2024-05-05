import { addImports, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "summoners-summit",
  },
  defaults: {
  },
  setup(_options, _nuxt) {
    // const resolver = createResolver(import.meta.url);
    // addImportsDir(resolver.resolve("./types"));
    addImports({ from: "dayjs", name: "default", as: "dayjs" });
    addImports({ from: "naive-ui", name: "DataTableColumn", type: true });
    addImports({ from: "naive-ui", name: "FormRules", type: true });
    addImports({
      from: "naive-ui",
      name: "FormItemRule",
      type: true,
      meta: {
        docsUrl: "https://www.naiveui.com/zh-CN/light/components/form#FormItemRule-Type",
      },
    });
    addImports({ from: "naive-ui", name: "SelectOption", type: true });
    addImports({ from: "naive-ui", name: "SelectFilter", type: true });
    addImports({ from: "naive-ui", name: "SelectRenderLabel", type: true });
    addImports({ from: "naive-ui", name: "SelectRenderTag", type: true });
    addImports({ from: "async-validator", name: "ValidateError", type: true });
  },
});
