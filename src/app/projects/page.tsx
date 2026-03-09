import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

// ── PROJECTS ──────────────────────────────────────────────────────────────────
// Add, remove, or edit project entries below.
// Fields: title, description, role, period, achievements (bullet points),
//         technologies (tags), href (link to repo or live demo).
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "googleformfiller",                                    // PROJECT NAME
    description:
      "automation script to fill out google forms programmatically using python",
    role: "creator",
    period: "2025",                                               // PERIOD
    achievements: [
      "built a python-based automation workflow for submitting google forms",
      "implemented robust handling for different question types and inputs",
      "streamlined repetitive form-filling tasks into a single reusable script",
    ],
    technologies: ["python", "automation"],                       // TECH STACK
    href: "https://github.com/prashantshirk/googleformfiller",
  },
  {
    title: "docentry-git",                                        // PROJECT NAME
    description:
      "web-based tool for documenting git repositories with an HTML interface",
    role: "creator",
    period: "2025",                                               // PERIOD
    achievements: [
      "implemented core logic in python for processing repository data",
      "created an html front-end with custom styling using css",
      "integrated git-related workflows into a simple documentation interface",
    ],
    technologies: ["python", "html", "css"],                      // TECH STACK
    href: "https://github.com/prashantshirk/docentry-git",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve built. i focus on machine
        learning, data science,web development and python-based tooling.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built in machine learning, data science, and python.",
  openGraph: {
    images: [
      {
        url: "https://prashantshirke.me/og/home?title=projects",
      },
    ],
  },
}
