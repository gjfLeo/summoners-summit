export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const { gameVersionPath } = useGameVersion({ skipDetection: true });
    if (to.name === from.name) {
      return navigateTo(`${location.href}/${gameVersionPath.value}`, { replace: true, open: { target: "_self" } });
    }
    else {
      return navigateTo(`${to.path}/${gameVersionPath.value}`, { replace: true });
    }
  }
});
