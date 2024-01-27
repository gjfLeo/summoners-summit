import type { MenuLinkRoute } from "@bg-dev/nuxt-naiveui";

interface MenuItem {
  name: string;
  path?: string;
  withGameVersion?: boolean;
  adminOnly?: boolean;
  children?: MenuItem[];
}
const menuConfig: MenuItem[] = [
  {
    name: "menu.tournaments",
    path: "/tournaments",
    withGameVersion: true,
  },
  {
    name: "menu.teams",
    path: "/teams",
    withGameVersion: true,
  },
  {
    name: "menu.players",
    path: "/players",
    withGameVersion: true,
  },
  {
    name: "menu.cards",
    path: "/cards",
    withGameVersion: true,
  },
  {
    name: "menu.tools",
    children: [
      { path: "/tools/decode-deck-code", name: "menu.tools.decodeDeckCode" },
      { path: "/tools/data-builder", name: "menu.tools.dataBuilder", adminOnly: true },
      { path: "/tools/card-image-check", name: "menu.tools.cardImageCheck", adminOnly: true },
    ],
  },
];

export default function useMenuRoutes() {
  const { isAdminMode } = useAdminMode();
  // const { gameVersionPath } = useGameVersion();
  const { t } = useI18n();
  const localePath = useLocalePath();
  function menuItemToLinkRoute(menuItem: MenuItem): MenuLinkRoute[] {
    if (menuItem.adminOnly && !isAdminMode.value) {
      return [];
    }
    // const path = menuItem.withGameVersion ? `${menuItem.path}/${gameVersionPath.value}` : menuItem.path!;
    const path = menuItem.path!;
    return [{
      label: t(menuItem.name),
      path: localePath(path),
      children: menuItem.children?.flatMap(menuItemToLinkRoute),
    }];
  }

  const routes = computed<MenuLinkRoute[]>(() => {
    return menuConfig.flatMap(menuItemToLinkRoute);
  });

  return { routes };
}
