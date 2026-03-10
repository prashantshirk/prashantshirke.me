import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

// ── HERO SECTION ─────────────────────────────────────────────────────────────
// Edit the values below to update your name, location, role, and bio.
// ─────────────────────────────────────────────────────────────────────────────
export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-gray-900 dark:text-white">
        <span className="inline-block">
          <ScrambleText text="prashant shirke" /> {/* YOUR NAME */}
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          mumbai, india {/* YOUR LOCATION */}
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          IT student | aspiring DevOps engineer {/* YOUR ROLE */}
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up text-gray-800 dark:text-gray-100">
        {/* YOUR BIO — edit this paragraph */}
        i&apos;m a bsc information technology student focused on machine
        learning, ai, and software development. i&apos;m currently building
        projects in python, data science, flask,web development and ai. my goal is to become a
        DevOps engineer and work on advanced systems.
      </p>
    </header>
  )
}
