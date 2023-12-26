// uno.config.ts
import {
  defineConfig,
  presetAttributify, presetIcons, presetUno,
  transformerAttributifyJsx, transformerDirectives, transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "u-",
      prefixedOnly: true,
    }),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  theme: {
    fontFamily: {
      sans: '"LXGW Neo XiHei", "Microsoft YaHei", sans-serif',
      mono: '"Liger Iosevka", "Ubuntu Mono", Consolas, monospace',
    },
  },
  rules: [
    [/^grid-cols-(\d+)-auto$/, ([, d]) => ({ "grid-template-columns": `repeat(${d}, auto)` })],
    [/^(?:grid-)?col-gap-(\d+)$/, ([,d]) => ({ "column-gap": `${Number(d) / 4}rem` })],
    [/^(?:grid-)?row-gap-(\d+)$/, ([,d]) => ({ "row-gap": `${Number(d) / 4}rem` })],
    [/^grid-col-(.+)$/, ([,v]) => ({ "grid-column": v })],
  ],
});
