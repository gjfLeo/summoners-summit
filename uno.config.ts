import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  rules: [
    ["h-content", { height: "calc(100vh - var(--g-header-height) - var(--g-footer-height) - 2rem)" }],
    ["min-h-content", { "min-height": "calc(100vh - var(--g-header-height) - var(--g-footer-height) - 2rem)" }],
  ],
  shortcuts: [
    ["flex-table", "flex-grow-1 flex-shrink-0 flex-basis-16rem"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: "Microsoft YaHei",
            provider: "none",
          },
        ],
        mono: [
          {
            name: "Ubuntu Mono",
            provider: "bunny",
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
