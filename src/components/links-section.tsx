import Link from "next/link"

// ── SOCIAL LINKS ─────────────────────────────────────────────────────────────
// Replace the href values below with your actual links.
// ─────────────────────────────────────────────────────────────────────────────
const links = [
  { title: "email",    href: "mailto:prashantshirkee@gmail.com" },           // YOUR EMAIL
  { title: "github",  href: "https://github.com/prashantshirk" },   // YOUR GITHUB
  { title: "linkedin", href: "https://www.linkedin.com/in/prashant-shirke-ab8880290/" }, // YOUR LINKEDIN
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
