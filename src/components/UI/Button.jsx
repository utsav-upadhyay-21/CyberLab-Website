import { motion } from "framer-motion"

export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles =
    "font-mono uppercase tracking-widest text-sm font-medium transition-colors duration-100 cursor-pointer inline-flex items-center gap-2"

  const variants = {
    primary:
      "bg-foreground text-background px-8 py-4 hover:bg-background hover:text-foreground hover:border-foreground border-2 border-transparent",
    secondary:
      "bg-transparent text-foreground border-2 border-foreground px-8 py-4 hover:bg-foreground hover:text-background",
    ghost:
      "bg-transparent text-foreground border-none px-0 py-2 hover:underline underline-offset-4 decoration-2",
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
