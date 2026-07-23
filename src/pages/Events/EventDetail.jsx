import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, User, Tag } from "lucide-react"
import { Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { events } from "../../data/events"

export function EventDetail() {
  const { id } = useParams()
  const event = events.find((e) => e.id === parseInt(id))

  if (!event) {
    return (
      <Container className="pt-32 pb-24">
        <p className="font-mono text-sm tracking-widest">Event not found</p>
        <Link to="/events" className="font-mono text-sm tracking-widest underline mt-4 block">
          Back to Events
        </Link>
      </Container>
    )
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 container-main relative texture-lines">
        <Link
          to="/events"
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:underline underline-offset-4 mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          All Events
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase border-2 border-foreground px-3 py-1 mb-6 inline-block">
            {event.type}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {event.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-6 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Calendar size={16} strokeWidth={1.5} />
            <span className="font-mono text-sm">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} strokeWidth={1.5} />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} strokeWidth={1.5} />
            <span>{event.speaker}</span>
          </div>
        </motion.div>
      </section>

      <SectionRule />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
                About this event
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
                Details
              </h3>
              <div className="space-y-4 border-2 border-foreground p-6">
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase mb-1 text-muted-foreground">Date</p>
                  <p>{new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                <div className="border-t border-border-light pt-4">
                  <p className="font-mono text-xs tracking-widest uppercase mb-1 text-muted-foreground">Venue</p>
                  <p>{event.venue}</p>
                </div>
                <div className="border-t border-border-light pt-4">
                  <p className="font-mono text-xs tracking-widest uppercase mb-1 text-muted-foreground">Speaker</p>
                  <p>{event.speaker}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-xs tracking-widest uppercase mb-3 text-muted-foreground">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border-2 border-foreground px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
