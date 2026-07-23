import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Projects", to: "/projects" },
]

const footerLinks = [
  { label: "Team", to: "/team" },
  { label: "Join Us", to: "/join" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <nav className="container-main flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          reinfosec labs
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-xs tracking-widest uppercase transition-colors hover:underline underline-offset-4 decoration-2 ${
                location.pathname === link.to
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-xs tracking-widest uppercase transition-colors hover:underline underline-offset-4 decoration-2 ${
                location.pathname === link.to
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 border-2 border-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden overflow-hidden border-t-2 border-foreground bg-background"
          >
            <div className="container-main py-6 flex flex-col gap-4">
              {[...navLinks, ...footerLinks].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-sm tracking-widest uppercase py-2 border-b border-border-light ${
                    location.pathname === link.to
                      ? "font-bold"
                      : ""
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
