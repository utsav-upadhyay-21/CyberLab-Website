import { motion } from "framer-motion"
import { MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { events } from "../../data/events"

export function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming Events"
        description="Workshops, CTFs, talks, and meetups at the RVITM Cybersecurity Lab."
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="space-y-4 max-w-3xl">
            {events.map((event, i) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-2 border-foreground p-6 md:p-8 transition-colors hover:bg-foreground hover:text-background group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 bg-foreground text-background group-hover:bg-background group-hover:text-foreground">
                    {event.type}
                  </span>
                  <span className="font-mono text-xs tracking-widest opacity-60">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm opacity-80">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} strokeWidth={1.5} /> {event.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} strokeWidth={1.5} /> {event.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} strokeWidth={1.5} /> {event.capacity}
                  </span>
                </div>
                <a href={event.registrationLink}>
                  <Button variant="secondary" className="group-hover:border-background group-hover:text-background">
                    Register <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </a>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
