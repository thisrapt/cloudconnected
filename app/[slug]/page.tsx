import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingTemplate from "@/components/landing/LandingTemplate";
import DetailTemplate from "@/components/solutions/DetailTemplate";
import OverviewTemplate from "@/components/solutions/OverviewTemplate";
import { getPage, sitePages } from "@/lib/pages";

// Every page is prerendered from generateStaticParams, so the whole page is URL-specific
// static content; there is no shared shell worth streaming behind Suspense.
export const instant = false;

export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/${page.slug}/` },
    robots: page.kind === "detail" && page.noindex ? { index: false } : undefined,
  };
}

export default async function SitePageRoute({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  switch (page.kind) {
    case "overview":
      return <OverviewTemplate page={page} />;
    case "landing":
      return <LandingTemplate page={page} />;
    default:
      return <DetailTemplate page={page} />;
  }
}
