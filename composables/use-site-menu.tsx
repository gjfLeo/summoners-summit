import type { MenuGroupOption, MenuOption } from "naive-ui";
import { NuxtLinkLocale } from "#components";

export interface SiteRoute {
  label: string;
  to?: string;
  matches?: RegExp[];
  children?: SiteRoute[];
  icon?: string;
}

const renderLabel: (option: MenuOption | MenuGroupOption) => VNode | string = (option) => {
  const content = h(
    "div",
    {
      class: "flex items-center gap-1",
    },
    [
      ...(option.iconClass ? [h("div", { class: option.iconClass })] : []),
      option.label as string,
    ],
  );
  if ("to" in option) {
    return <NuxtLinkLocale to={option.to as string | undefined} prefetch={false}>{content}</NuxtLinkLocale>;
  }
  else {
    return content;
  }
};

export function useSiteMenu(routes: SiteRoute[]) {
  const { t } = useLocales();
  const route = useRoute();

  const menuOptions = computed<MenuOption[]>(() => {
    return routes.map((route, i) => routeToOption(route, [i]));
  });

  function routeToOption(route: SiteRoute, keys: number[]): MenuOption {
    return {
      key: keys.join("-"),
      label: t(`site.menu.${route.label}`),
      children: route.children?.map((child, i) => routeToOption(child, [...keys, i])),
      to: route.to,
      matches: route.matches,
      iconClass: route.icon,
    };
  }

  function checkRoute(options: MenuOption[]): string | undefined {
    for (const option of options) {
      const routeOption = option as SiteRoute;
      if (option.children) {
        const key = checkRoute(option.children);
        if (key) return key;
      }
      if (route.path === routeOption.to) {
        return option.key as string;
      }
      for (const match of (routeOption.matches ?? [])) {
        if (match.test(route.path)) {
          return option.key as string;
        }
      }
    }
    return undefined;
  }

  const menuValue = computed(() => checkRoute(menuOptions.value));

  return {
    menuOptions,
    menuValue,
    renderLabel,
  };
}
