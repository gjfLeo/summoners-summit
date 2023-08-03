export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const { gameVersionPath } = useGameVersion();
    if (to.name === from.name) {
      return navigateTo(`${location.href}/${gameVersionPath.value}`, { replace: true, open: { target: "_self" } });
    }
    else {
      return navigateTo(`${to.path}/${gameVersionPath.value}`, { replace: true });
    }
  }
});
