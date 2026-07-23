import { motion } from "framer-motion"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { FAQItem } from "../../components/FAQ/FAQItem"
import { faq } from "../../data/faq"

export function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about AEGIS"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <FAQItem item={item} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
