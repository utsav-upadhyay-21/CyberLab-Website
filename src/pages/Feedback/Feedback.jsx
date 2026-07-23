import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"

const categories = [
  "Suggestion",
  "Complaint",
  "Workshop Idea",
  "Event Idea",
  "Resource Request",
  "General Feedback",
]

export function Feedback() {
  const [formState, setFormState] = useState({
    category: "",
    message: "",
    email: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your anonymous feedback!")
    setFormState({ category: "", message: "", email: "" })
  }

  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title="Anonymous Feedback"
        description="Share your suggestions, ideas, and feedback anonymously"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-grid">
        <Container>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="border-2 border-foreground p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare size={24} strokeWidth={1.5} />
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    Submit Feedback
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Your identity is completely anonymous. We value your honest feedback to improve the club.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase block mb-2">
                      Category
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormState({ ...formState, category: cat })}
                          className={`font-mono text-xs tracking-widest uppercase px-3 py-2 border-2 transition-colors text-left ${
                            formState.category === cat
                              ? "bg-foreground text-background border-foreground"
                              : "border-foreground hover:bg-foreground hover:text-background"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={6}
                      className="w-full border-2 border-foreground px-4 py-3 font-body text-base focus:border-b-4 focus:outline-none bg-transparent placeholder:text-muted-foreground placeholder:italic resize-y"
                      placeholder="Share your thoughts..."
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase block mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full border-2 border-foreground px-4 py-3 font-body text-base focus:border-b-4 focus:outline-none bg-transparent placeholder:text-muted-foreground placeholder:italic"
                      placeholder="your@email.com (if you'd like a response)"
                    />
                    <p className="font-mono text-xs text-muted-foreground mt-2">
                      Optional. Only used if you'd like us to follow up.
                    </p>
                  </div>

                  <Button type="submit">
                    Submit Anonymously <Send size={16} strokeWidth={1.5} />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
