import type { RouteLocationRaw } from "#vue-router";

declare module "@bg-dev/nuxt-naiveui" {
  export interface MenuLinkRoute {
    label: string;
    icon?: string;
    to?: RouteLocationRaw;
    children?: MenuLinkRoute[];
  }
}
