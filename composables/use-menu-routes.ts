import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";

interface MenuItem {
  name: string;
  path?: string;
  withGameVersion?: boolean;
  adminOnly?: boolean;
  children?: MenuItem[];
}

export default function useMenuRoutes() {
  const { isAdminMode } = useAdminMode();
  // const { gameVersionPath } = useGameVersion();
  const { t } = useI18n();
  const localePath = useLocalePath();

  const menuConfig = computed<MenuItem[]>(() => [
    {
      name: t("menu.tournaments"),
      path: "/tournaments",
    },
    {
      name: t("menu.teams"),
      path: "/teams",
      withGameVersion: true,
    },
    {
      name: t("menu.players"),
      path: "/players",
      withGameVersion: true,
    },
    {
      name: t("menu.cards"),
      path: "/cards",
      withGameVersion: true,
    },
    {
      name: t("menu.tools"),
      children: [
        { path: "/tools/decode-deck-code", name: t("menu.decodeDeckCode") },
        { path: "/tools/data-builder", name: t("menu.dataBuilder"), adminOnly: true },
        { path: "/tools/card-image-check", name: t("menu.cardImageCheck"), adminOnly: true },
      ],
    },
  ]);
  function menuItemToLinkRoute(menuItem: MenuItem): MenuLinkRoute[] {
    if (menuItem.adminOnly && !isAdminMode.value) {
      return [];
    }
    // const path = menuItem.withGameVersion ? `${menuItem.path}/${gameVersionPath.value}` : menuItem.path!;
    const path = menuItem.path!;
    return [{
      label: menuItem.name,
      path: localePath(path),
      children: menuItem.children?.flatMap(menuItemToLinkRoute),
    }];
  }

  const routes = computed<MenuLinkRoute[]>(() => {
    return menuConfig.value.flatMap(menuItemToLinkRoute);
  });

  return { routes };
}
