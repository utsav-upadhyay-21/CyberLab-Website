import { motion } from "framer-motion"
import { Target, Eye, Lightbulb, Users, Calendar, Award, Mail, Phone, MapPin } from "lucide-react"
import { PageHero, Container, SectionRule, SectionRuleThin } from "../../components/UI/Section"
import { aboutContent } from "../../data/about"

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About REINFOSEC LABS"
        description={aboutContent.subtitle}
      />

      <SectionRule />

      {/* Description */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              {aboutContent.description}
            </p>
          </motion.div>
        </Container>
      </section>

      <SectionRule />

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-2 border-background p-8 md:p-12 transition-colors hover:bg-background hover:text-foreground group"
            >
              <Target size={24} strokeWidth={1.5} className="mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Mission
              </h3>
              <p className="opacity-80 group-hover:text-foreground/70">
                {aboutContent.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-2 border-background p-8 md:p-12 transition-colors hover:bg-background hover:text-foreground group"
            >
              <Eye size={24} strokeWidth={1.5} className="mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Vision
              </h3>
              <p className="opacity-80 group-hover:text-foreground/70">
                {aboutContent.vision}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Objectives */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Objectives
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What we aim to achieve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutContent.objectives.map((objective, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-foreground p-6 transition-colors hover:bg-foreground hover:text-background"
              >
                <span className="font-mono text-xs tracking-widest opacity-40 block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg">{objective}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Industries */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
              Industries
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Sectors we serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutContent.industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-2 border-background p-6 text-center transition-colors hover:bg-background hover:text-foreground"
              >
                <p className="font-mono text-sm tracking-widest uppercase">{industry}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Contact */}
      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Get in touch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background group"
            >
              <Mail size={24} strokeWidth={1.5} className="mb-6" />
              <h3 className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">
                Email
              </h3>
              <a
                href={`mailto:${aboutContent.contact.email}`}
                className="text-lg hover:underline underline-offset-4"
              >
                {aboutContent.contact.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background group"
            >
              <Phone size={24} strokeWidth={1.5} className="mb-6" />
              <h3 className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">
                Phone
              </h3>
              <a
                href={`tel:${aboutContent.contact.phone.replace(/\s/g, "")}`}
                className="text-lg hover:underline underline-offset-4"
              >
                {aboutContent.contact.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background group"
            >
              <MapPin size={24} strokeWidth={1.5} className="mb-6" />
              <h3 className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">
                Address
              </h3>
              <p className="text-lg">{aboutContent.contact.address}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Values */}
      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutContent.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-foreground p-6 transition-colors hover:bg-foreground hover:text-background"
              >
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  {value.title}
                </h3>
                <p className="text-sm opacity-80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
