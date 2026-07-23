import { ExternalLink } from "lucide-react"

export function NewsletterCard({ newsletter }) {
  const drivePreviewUrl = `https://drive.google.com/file/d/${newsletter.driveId}/preview`
  const driveOpenUrl = `https://drive.google.com/file/d/${newsletter.driveId}/view`

  return (
    <div className="border-2 border-foreground p-6 md:p-8 transition-colors duration-100 hover:bg-foreground hover:text-background group">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs tracking-widest text-muted-foreground group-hover:text-background/60">
          {new Date(newsletter.date).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
        {newsletter.title}
      </h3>
      <p className="text-muted-foreground group-hover:text-background/70 mb-6">
        {newsletter.description}
      </p>

      <div className="border-2 border-current p-4 mb-6 bg-muted group-hover:bg-background/10">
        <div className="aspect-[4/3] w-full flex items-center justify-center">
          <iframe
            src={drivePreviewUrl}
            className="w-full h-full border-0"
            title={newsletter.title}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={driveOpenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:underline underline-offset-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} strokeWidth={1.5} />
          Open in Drive
        </a>
      </div>
    </div>
  )
}
