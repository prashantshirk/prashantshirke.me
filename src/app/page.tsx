import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { workItems } from "@/lib/work-items"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

// ── FEATURED PROJECTS (HOMEPAGE) ─────────────────────────────────────────────
// Edit the 2 entries below for the projects shown on the home page.
// Full project list is in src/app/projects/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
const projectItems = [
  {
    title: "googleformfiller",                                  // PROJECT NAME
    role: "creator",
    description:
      "automation script to fill out google forms programmatically using python",
    href: "https://github.com/prashantshirk/googleformfiller",
  },
  {
    title: "docentry-git",                                      // PROJECT NAME
    role: "creator",
    description:
      "web-based tool for documenting git repositories with an html interface",
    href: "https://github.com/prashantshirk/docentry-git",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <BlogSection />
      <SectionList
        title="skills"
        items={featuredWorkItems}
        viewAllHref="/work"
        viewAllText="all skills"
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
