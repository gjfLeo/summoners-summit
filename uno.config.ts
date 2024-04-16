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
import { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT } from "./config/layout";

export default defineConfig({
  rules: [
    ["h-header", { height: LAYOUT_HEADER_HEIGHT }],
    ["h-footer", { height: LAYOUT_FOOTER_HEIGHT }],
    ["h-content", { height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT} - 2rem)` }],
    ["min-h-content", { "min-height": `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT} - 2rem)` }],
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
