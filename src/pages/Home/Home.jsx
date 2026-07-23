import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, BookOpen, Users } from "lucide-react"
import { Container, SectionHeading, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { homeContent } from "../../data/home"
import { newsletters } from "../../data/newsletters"

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
              RV Institute of Technology & Management
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
            <p className="font-mono text-sm tracking-widest uppercase mb-8 text-muted-foreground">
              {homeContent.hero.tagline}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.4 }}>
            <p className="text-lg text-muted-foreground max-w-xl mb-12">
              {homeContent.hero.description}
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.5, duration: 0.4 }} className="flex items-center gap-4">
            <Link to="/join">
              <Button>
                Join Us <ArrowRight size={16} strokeWidth={1.5} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      <SectionRule />

      {/* Stats */}
      <section className="bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeContent.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <p className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-xs tracking-widest uppercase opacity-60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* About Preview */}
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
                title="Securing the digital frontier"
                description="AEGIS bridges the gap between academic learning and real-world cybersecurity practices."
              />
              <Link to="/about">
                <Button variant="secondary">
                  Read Our Story <ArrowRight size={16} strokeWidth={1.5} />
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
              {[
                { icon: Shield, text: "Hands-on security workshops and labs" },
                { icon: Zap, text: "CTF competitions and challenge-based learning" },
                { icon: BookOpen, text: "Curated resources and learning paths" },
                { icon: Users, text: "Community of 120+ security enthusiasts" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-2 border-foreground p-6 transition-colors hover:bg-foreground hover:text-background group">
                  <item.icon size={20} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                  <p className="font-body text-lg">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Latest Newsletter */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-12 md:mb-16">
                <p className="font-mono text-xs tracking-widest uppercase mb-4 text-white">
                  Newsletter
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  AEGIS Chronicle
                </h2>
                <p className="text-lg text-white max-w-2xl">
                  Our monthly newsletter covering security insights, tutorials, event recaps, and member spotlights.
                </p>
              </div>
              <Link to="/newsletter">
                <Button className="bg-background text-foreground hover:bg-foreground hover:text-background border-2 border-background hover:border-foreground">
                  Browse Archive <ArrowRight size={16} strokeWidth={1.5} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="border-2 border-background p-8"
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
                Latest Issue
              </p>
              <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
                {newsletters[newsletters.length - 1].title}
              </h3>
              <p className="opacity-80 mb-6">
                {newsletters[newsletters.length - 1].description}
              </p>
              <div className="aspect-[4/3] w-full bg-background/10 border-2 border-background flex items-center justify-center">
                <span className="font-mono text-xs tracking-widest uppercase opacity-40">
                  Newsletter Preview
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* CTA */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6">
              Ready to join?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Become part of the most active cybersecurity community at RVITM.
            </p>
            <Link to="/join">
              <Button>
                Join AEGIS <ArrowRight size={16} strokeWidth={1.5} />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
