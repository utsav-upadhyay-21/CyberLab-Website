import { motion } from "framer-motion"
import { ArrowRight, Shield, Users, BookOpen, Award } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"

const benefits = [
  {
    icon: Shield,
    title: "Hands-on Skills",
    description: "Gain practical experience with industry-standard security tools and techniques.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a network of 120+ like-minded security enthusiasts and professionals.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access curated learning paths, workshops, and mentorship from experienced members.",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn certificates for workshop participation and CTF achievements.",
  },
]

export function JoinUs() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Join AEGIS"
        description="Become part of the most active cybersecurity community at RVITM"
      />

      <SectionRule />

      {/* Benefits */}
      <section className="py-24 md:py-32 relative texture-grid">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Why Join
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Membership benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background group"
              >
                <benefit.icon size={24} strokeWidth={1.5} className="mb-6" />
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Eligibility */}
      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
                Eligibility
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Who can join?
              </h2>
              <ul className="space-y-4">
                {[
                  "Any student currently enrolled at RVITM",
                  "All departments and years are welcome",
                  "No prior cybersecurity experience required",
                  "Willingness to learn and contribute",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-2 border-foreground p-4 transition-colors hover:bg-foreground hover:text-background group">
                    <span className="font-mono text-xs tracking-widest opacity-60 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="border-2 border-foreground p-12 text-center w-full">
                <h3 className="font-display text-3xl font-bold tracking-tight mb-4">
                  Ready to start?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Express your interest and we'll reach out with next steps.
                </p>
                <a
                  href="mailto:aegis@rvitm.edu.in?subject=Membership%20Interest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    Express Interest <ArrowRight size={16} strokeWidth={1.5} />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
