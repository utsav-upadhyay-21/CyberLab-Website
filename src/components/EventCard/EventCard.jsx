import { Link } from "react-router-dom"
import { Calendar, MapPin, User } from "lucide-react"

export function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="border-2 border-foreground p-6 md:p-8 transition-colors duration-100 hover:bg-foreground hover:text-background group">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase border border-current px-3 py-1">
            {event.type}
          </span>
          <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-background/60">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
          {event.title}
        </h3>
        <p className="text-muted-foreground group-hover:text-background/70 mb-6 line-clamp-2">
          {event.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground group-hover:text-background/60">
          <div className="flex items-center gap-2">
            <MapPin size={14} strokeWidth={1.5} />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={14} strokeWidth={1.5} />
            <span>{event.speaker}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs border border-current px-2 py-0.5 opacity-60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
