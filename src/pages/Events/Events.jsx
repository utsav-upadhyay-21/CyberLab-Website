import { useState } from "react"
import { motion } from "framer-motion"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { EventCard } from "../../components/EventCard/EventCard"
import { events } from "../../data/events"

export function Events() {
  const [filter, setFilter] = useState("all")

  const filteredEvents = filter === "all"
    ? events
    : events.filter((e) => e.type === filter)

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events"
        description="Workshops, seminars, competitions, and more"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          {/* Filters */}
          <div className="flex items-center gap-4 mb-12">
            {["all", "upcoming", "past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border-2 transition-colors ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
                No events found
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
