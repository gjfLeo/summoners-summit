import type { MenuGroupOption, MenuOption } from "naive-ui";
import { NuxtLinkLocale } from "#components";

export interface SiteRoute {
  label: string;
  to?: string;
  matches?: RegExp[];
  children?: SiteRoute[];
}

const renderLabel: (option: MenuOption | MenuGroupOption) => VNode | string = (option) => {
  if ("to" in option) {
    return <NuxtLinkLocale to={option.to} prefetch={false}>{option.label}</NuxtLinkLocale>;
  }
  else {
    return option.label as string;
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
    };
  }

  function checkRoute(options: MenuOption[]): string | undefined {
    for (const option of options) {
      if (option.children) {
        const key = checkRoute(option.children);
        if (key) return key;
      }
      if ("to" in option) {
        if (route.path === option.to as string) {
          return option.key as string;
        }
      }
      if ("matches" in option) {
        for (const match of (option.matches as SiteRoute["matches"] ?? [])) {
          if (match.test(route.path)) {
            return option.key as string;
          }
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
