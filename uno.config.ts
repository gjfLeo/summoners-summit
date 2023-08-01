// uno.config.ts
import {
  defineConfig,
  presetAttributify, presetIcons, presetUno,
  transformerAttributifyJsx, transformerDirectives, transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
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
      mono: '"Liger Iosevka", "LXGW Neo XiHei", monospace',
    },
  },
});
