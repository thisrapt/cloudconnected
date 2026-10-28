// Every page served by app/[slug]/page.tsx, looked up by slug.

import { branchPages } from "@/lib/branches";
import { companyPages } from "@/lib/company";
import { industriesMenu, solutionsMenu, type NavLink } from "@/lib/content";
import { landingPages } from "@/lib/landing";
import { legalPages } from "@/lib/legal";
import { solutionPages } from "@/lib/solutions";
import type { SitePage } from "@/lib/types";

export const sitePages: SitePage[] = [
  ...solutionPages,
  ...branchPages,
  ...companyPages,
  ...legalPages,
  ...landingPages,
];

export function getPage(slug: string): SitePage | undefined {
  return sitePages.find((page) => page.slug === slug);
}

type ParentNav = { label: string; href: string; relatedTitle: string; links: NavLink[] };

/** Breadcrumb + "related pages" data for a menu group (solutions or branches). */
export function getParentNav(parentSlug: string): ParentNav | undefined {
  const href = `/${parentSlug}/`;
  const group = solutionsMenu.find((g) => g.href === href);
  if (group) {
    return {
      label: group.label,
      href: group.href,
      relatedTitle: `Meer voor ${group.label.toLowerCase()}`,
      links: group.links.filter((link) => link.label !== "Overzicht"),
    };
  }
  if (href === industriesMenu.all.href) {
    return { label: "Branches", href, relatedTitle: "Andere branches", links: industriesMenu.links };
  }
  return undefined;
}
