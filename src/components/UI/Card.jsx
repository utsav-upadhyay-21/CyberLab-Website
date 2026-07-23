import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Card({ children, className = "", inverted = false, hover = true }) {
  return (
    <div
      className={`
        ${inverted ? "bg-foreground text-background" : "bg-card text-card-foreground border-2 border-foreground"}
        ${hover ? "group transition-colors duration-100 hover:bg-foreground hover:text-background cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export function CardLink({ to, children, className = "", inverted = false }) {
  return (
    <Link
      to={to}
      className={`block ${className}`}
    >
      <Card inverted={inverted}>
        {children}
      </Card>
    </Link>
  )
}

export function Badge({ children, className = "" }) {
  return (
    <span className={`font-mono text-xs tracking-widest uppercase border border-current px-3 py-1 ${className}`}>
      {children}
    </span>
  )
}
