import { motion } from "framer-motion"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { NewsletterCard } from "../../components/NewsletterCard/NewsletterCard"
import { newsletters } from "../../data/newsletters"

export function Newsletter() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="AEGIS Chronicle"
        description="Monthly insights, tutorials, and community highlights"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsletters.map((newsletter, i) => (
              <motion.div
                key={newsletter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <NewsletterCard newsletter={newsletter} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
