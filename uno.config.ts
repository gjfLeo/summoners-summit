import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefixedOnly: true,
    }),
    presetIcons({ scale: 1 }),
    // presetTypography(),
    presetWebFonts({
      fonts: {
        sans: [
          { name: "LXGW Neo XiHei", provider: "none" },
          { name: "Microsoft YaHei", provider: "none" },
        ],
        mono: [
          { name: "Ubuntu Mono", provider: "bunny" },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  rules: [
    ["h-content", { height: "calc(100vh - var(--g-header-height) - var(--g-footer-height) - 2rem)" }],
    ["min-h-content", { "min-height": "calc(100vh - var(--g-header-height) - var(--g-footer-height) - 2rem)" }],
    [/^(?:grid-)?col-gap-(\d+)$/, ([,d]) => ({ "column-gap": `${Number(d) / 4}rem` })],
    [/^(?:grid-)?row-gap-(\d+)$/, ([,d]) => ({ "row-gap": `${Number(d) / 4}rem` })],
  ],
  shortcuts: [
    ["flex-table", "flex-grow-1 flex-shrink-0 flex-basis-16rem"],
  ],
});
