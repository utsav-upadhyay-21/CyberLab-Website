import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { currentAffairs, severityColors } from "../../data/currentAffairs"

export function CurrentAffairs() {
  return (
    <>
      <PageHero
        eyebrow="Current Affairs"
        title="Cybersecurity News"
        description="Stay informed about the latest vulnerabilities, breaches, and advisories."
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="space-y-4 max-w-3xl">
            {currentAffairs.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-2 border-foreground p-6 md:p-8 transition-colors hover:bg-foreground hover:text-background group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest opacity-60">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    className={`font-mono text-xs tracking-widest uppercase px-2 py-0.5 ${
                      severityColors[item.severity]
                    }`}
                  >
                    {item.severity}
                  </span>
                  <span className="font-mono text-xs tracking-widest uppercase opacity-60">
                    {item.source}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3 group-hover:text-background">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-4">
                  {item.summary}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase hover:underline underline-offset-4"
                >
                  Read more <ExternalLink size={12} strokeWidth={1.5} />
                </a>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
