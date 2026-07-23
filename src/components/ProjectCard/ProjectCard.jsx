import { ExternalLink, Code2 } from "lucide-react"

export function ProjectCard({ project }) {
  return (
    <div className="border-2 border-foreground p-6 md:p-8 transition-colors duration-100 hover:bg-foreground hover:text-background group">
      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
        {project.title}
      </h3>
      <p className="text-muted-foreground group-hover:text-background/70 mb-6">
        {project.description}
      </p>

      <div className="mb-4">
        <p className="font-mono text-xs tracking-widest uppercase mb-2 opacity-60">
          Team
        </p>
        <p className="text-sm">{project.teamMembers.join(", ")}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs border border-current px-2 py-0.5 opacity-60"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:underline underline-offset-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Code2 size={14} strokeWidth={1.5} />
          GitHub
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:underline underline-offset-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
