import { addImports, addImportsDir, createResolver, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "summoners-summit",
  },
  defaults: {
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addImportsDir(resolver.resolve("./types"));
    addImports({ from: "naive-ui", name: "DataTableColumn", type: true });
  },
});