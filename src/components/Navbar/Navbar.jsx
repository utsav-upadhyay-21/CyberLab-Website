import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "CTF", to: "/ctf" },
  { label: "Current Affairs", to: "/current-affairs" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "FAQ", to: "/faq" },
  { label: "Join Us", to: "/join" },
  { label: "Contact", to: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <nav className="container-main flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          RVITM CyberSecurity Lab
        </Link>

        {/* Mobile Toggle */}
        <button
          className="p-2 border-2 border-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden border-t-2 border-foreground bg-background"
          >
            <div className="container-main py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-sm tracking-widest uppercase py-2 border-b border-border-light ${
                    location.pathname === link.to ? "font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
