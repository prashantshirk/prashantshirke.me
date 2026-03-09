import type { Item } from "@/components/section-list"

// ── SKILLS ───────────────────────────────────────────────────────────────────
// Add, remove, or edit skill entries below.
// Each entry has: title (skill name), role (proficiency/category),
// period (how long / status), description (what you use it for), href (docs link).
// ─────────────────────────────────────────────────────────────────────────────
export const workItems: Item[] = [
  {
    title: "python",
    role: "primary language",
    period: "ongoing",
    description:
      "building data science pipelines, machine learning models, and flask web applications",
    href: "https://python.org",
  },
  {
    title: "machine learning",
    role: "core focus area",
    period: "ongoing",
    description:
      "supervised and unsupervised learning techniques",
    href: "https://scikit-learn.org",
  },
  {
    title: "data science",
    role: "analysis and visualization",
    period: "ongoing",
    description:
      "data cleaning, exploratory analysis, and visualization using pandas, numpy, and matplotlib",
    href: "https://pandas.pydata.org",
  },
  {
    title: "flask",
    role: "web development",
    period: "ongoing",
    description:
      "building rest apis and web applications. integrated with google sheets, databases, and external services",
    href: "https://flask.palletsprojects.com",
  },
  {
    title: "git & linux",
    role: "dev tooling",
    period: "ongoing",
    description:
      "version control with git, linux shell scripting, and network configuration commands",
    href: "https://git-scm.com",
  },
  {
    title: "java",
    role: "secondary language",
    period: "ongoing",
    description:
      "object-oriented programming, networking concepts, and academic coursework projects",
    href: "https://java.com",
  },
]
