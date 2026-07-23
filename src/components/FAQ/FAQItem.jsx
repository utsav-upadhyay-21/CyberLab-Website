import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-2 border-foreground">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-foreground hover:text-background group"
      >
        <span className="font-display text-lg md:text-xl font-bold tracking-tight pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={`shrink-0 transition-transform duration-100 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t-2 border-foreground">
              <p className="pt-6 text-muted-foreground">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
