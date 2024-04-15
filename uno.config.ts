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
  shortcuts: [
    ["btn", "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
    ["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600"],
  ],
  rules: [
    ["h-header", { height: LAYOUT_HEADER_HEIGHT }],
    ["h-footer", { height: LAYOUT_FOOTER_HEIGHT }],
    ["h-content", { height: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT} - 2rem)` }],
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
