import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container, SectionHeading, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { homeContent } from "../../data/home"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 texture-grid" />
        <Container className="relative z-10 py-32">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest uppercase mb-6 text-muted-foreground">
              {homeContent.hero.institution}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.4 }}>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-4">
              {homeContent.hero.title}
            </h1>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.4 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[4px] w-16 bg-foreground" />
              <p className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                {homeContent.hero.subtitle}
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.4 }}>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              {homeContent.hero.description}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.4 }}>
            <p className="font-mono text-sm tracking-widest uppercase mb-10 text-muted-foreground">
              {homeContent.hero.tagline}
            </p>
          </motion.div>

        </Container>
      </section>

      <SectionRule />

      {/* Feature Strip */}
      <section className="bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeContent.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <p className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* About the Lab */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading
                eyebrow="About"
                title={homeContent.aboutLab.title}
                description={homeContent.aboutLab.subtitle}
              />
              <Link to="/about">
                <Button variant="secondary">
                  Learn More <ArrowRight size={16} strokeWidth={1.5} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg">{homeContent.aboutLab.description}</p>
              <p className="text-muted-foreground">{homeContent.aboutLab.description2}</p>
              <p className="text-muted-foreground">{homeContent.aboutLab.description3}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Why This Lab */}
      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Why This Lab?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              From theory to practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {homeContent.whyLab.steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-foreground p-8 text-center transition-colors hover:bg-foreground hover:text-background group"
              >
                <span className="font-mono text-xs tracking-widest opacity-40 block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
                  {step.label}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/70">
                  {step.description}
                </p>
                {i < homeContent.whyLab.steps.length - 1 && (
                  <ArrowRight size={20} strokeWidth={1.5} className="mx-auto mt-4 opacity-30 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Student Community - AEGIS */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
                {homeContent.aegis.title}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {homeContent.aegis.name}
              </h2>
              <p className="text-lg mb-4">{homeContent.aegis.description}</p>
              <p className="text-muted-foreground">{homeContent.aegis.description2}</p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
