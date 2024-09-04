import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt-BR"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/en",
      "pt-BR": "/pt",
    },
  },
});


export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
