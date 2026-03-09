import { ScrambleText } from "@/components/scramble-text"
import { SectionList } from "@/components/section-list"
import { workItems } from "@/lib/work-items"
import { Metadata } from "next"

// ── SKILLS PAGE ───────────────────────────────────────────────────────────────
// This page lists all your skills. Skill data lives in src/lib/work-items.ts
// ─────────────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="skills" /> {/* PAGE TITLE */}
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are the technical skills and tools i work with.
      </p>

      <SectionList title="skills" items={workItems} showTitle={false} />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools I work with.",
  openGraph: {
    images: [
      {
        url: "https://prashantshirke.me/og/home?title=skills",
      },
    ],
  },
}
