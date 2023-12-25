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
    name: "赛事",
    path: "/tournaments",
    withGameVersion: true,
  },
  {
    name: "阵容",
    path: "/teams",
    withGameVersion: true,
  },
  {
    name: "选手",
    path: "/players",
    withGameVersion: true,
  },
  {
    name: "卡牌",
    path: "/cards",
    withGameVersion: true,
  },
  {
    name: "工具",
    children: [
      { path: "/tools/decode-deck-code", name: "牌组分享码解码" },
      { path: "/tools/data-builder", name: "数据录入工具", adminOnly: true },
      { path: "/tools/card-image-check", name: "卡牌图片检查", adminOnly: true },
    ],
  },
];

export default function useMenuRoutes() {
  const { isAdminMode } = useAdminMode();
  function menuItemToLinkRoute(menuItem: MenuItem): MenuLinkRoute[] {
    if (menuItem.adminOnly && !isAdminMode.value) {
      return [];
    }
    return [{
      label: menuItem.name,
      path: menuItem.path,
      children: menuItem.children?.flatMap(menuItemToLinkRoute),
    }];
  }

  const routes = computed<MenuLinkRoute[]>(() => {
    return menuConfig.flatMap(menuItemToLinkRoute);
  });

  return { routes };
}
