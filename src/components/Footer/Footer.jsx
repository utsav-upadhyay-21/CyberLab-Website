import { Link } from "react-router-dom"
import { siteConfig } from "../../data/site"

const footerNav = [
  {
    title: "Lab",
    links: [
      { label: "About", to: "/about" },
      { label: "Events", to: "/events" },
      { label: "Newsletter", to: "/newsletter" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Team", to: "/team" },
      { label: "Join Us", to: "/join" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Feedback",
    links: [
      { label: "Anonymous Feedback", to: "/feedback" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">
              AEGIS
            </Link>
            <p className="font-mono text-xs tracking-widest uppercase mt-2 opacity-60">
              Cybersecurity Club
            </p>
            <p className="mt-4 text-sm opacity-60">
              {siteConfig.institution}
            </p>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-background pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-widest opacity-40">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
