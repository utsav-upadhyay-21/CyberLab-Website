import { motion } from "framer-motion"
import { Target, Eye, Lightbulb, Users, Mail, MapPin, Building, GraduationCap, Search, Trophy, Briefcase } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { aboutContent } from "../../data/about"

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About the RVITM Cybersecurity Lab"
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
            className="max-w-3xl space-y-6"
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              {aboutContent.description}
            </p>
            <p className="text-muted-foreground">{aboutContent.description2}</p>
            <p className="text-muted-foreground">{aboutContent.description3}</p>
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

      {/* Partners */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
              Partners
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Built through collaboration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aboutContent.partners.map((partner, i) => {
              const icons = [GraduationCap, Building, Users]
              const Icon = icons[i]
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="border-2 border-background p-8 transition-colors hover:bg-background hover:text-foreground"
                >
                  <Icon size={24} strokeWidth={1.5} className="mb-6" />
                  <p className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">
                    {partner.role}
                  </p>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm opacity-80">{partner.description}</p>
                </motion.div>
              )
            })}
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
                <p className="text-sm text-muted-foreground group-hover:text-background/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Lab Details */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
              Lab Details
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Inside the lab
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for lab images - replace src with actual image URLs later */}
            {[
              { title: "Cybersecurity Workstations", placeholder: "Lab Image 1" },
              { title: "Network Environment", placeholder: "Lab Image 2" },
              { title: "Security Testing Tools", placeholder: "Lab Image 3" },
              { title: "Training Infrastructure", placeholder: "Lab Image 4" },
              { title: "CTF Environment", placeholder: "Lab Image 5" },
              { title: "Project & Research Space", placeholder: "Lab Image 6" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-background overflow-hidden group"
              >
                <div className="aspect-[4/3] w-full bg-background/10 flex items-center justify-center">
                  {/* Replace this div with an img tag when you have actual images */}
                  {/* <img src="YOUR_IMAGE_URL" alt={item.title} className="w-full h-full object-cover" /> */}
                  <span className="font-mono text-xs tracking-widest uppercase opacity-40">
                    {item.placeholder}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      {/* Contact */}
      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Get in touch
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background"
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
              className="border-2 border-foreground p-8 transition-colors hover:bg-foreground hover:text-background"
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
    </>
  )
}
