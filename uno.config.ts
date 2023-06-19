import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: '"LXGW Neo XiHei", "Microsoft YaHei", sans-serif',
      mono: '"Liger Iosevka", "LXGW Neo XiHei", monospace',
    },
  },
  shortcuts: [
    ["btn", "px-4 py-1 rounded inline-block bg-lime-500 text-white cursor-pointer hover:bg-lime-600 disabled:cursor-default disabled:bg-gray-500 disabled:opacity-50 transition-3"],
    ["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-lime-500"],
  ],
  rules: [
    [/^grid-cols-(\d+)-auto$/, ([, d]) => ({ "grid-template-columns": `repeat(${d}, auto)` })],
    [/^col-gap-(\d+)$/, ([,d]) => ({ "column-gap": `${Number(d) / 4}rem` })],
    [/^row-gap-(\d+)$/, ([,d]) => ({ "row-gap": `${Number(d) / 4}rem` })],
    [/^grid-col-(.+)$/, ([,v]) => ({ "grid-column": v })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
});
