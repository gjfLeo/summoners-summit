import { defineNuxtRouteMiddleware, setPageLayout } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes("/admin")) {
    return setPageLayout("admin");
  }
});
