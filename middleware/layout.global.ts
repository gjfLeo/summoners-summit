export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes("/admin")) {
    return setPageLayout("admin");
  }
});
