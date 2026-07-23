import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, MessageSquare } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { siteConfig } from "../../data/site"

const feedbackCategories = [
  "Suggestion",
  "Complaint",
  "Workshop Idea",
  "Event Idea",
  "Resource Request",
  "General Feedback",
]

export function Contact() {
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
        eyebrow="Contact"
        title="Get in Touch"
        description="Have questions? We'd love to hear from you."
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Anonymous Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={24} strokeWidth={1.5} />
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  Anonymous Feedback
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
                  <div className="grid grid-cols-2 gap-2">
                    {feedbackCategories.map((cat) => (
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="border-2 border-foreground p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={18} strokeWidth={1.5} />
                    <p className="font-mono text-xs tracking-widest uppercase">Email</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="border-2 border-foreground p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={18} strokeWidth={1.5} />
                    <p className="font-mono text-xs tracking-widest uppercase">Location</p>
                  </div>
                  <p>{siteConfig.location}</p>
                </div>

                <div className="border-2 border-foreground p-6">
                  <p className="font-mono text-xs tracking-widest uppercase mb-4">Social</p>
                  <div className="space-y-3">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline underline-offset-4"
                    >
                      Instagram
                    </a>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
