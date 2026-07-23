import { Link } from "react-router-dom"

export function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  )
}

export function SectionRule() {
  return <div className="section-rule" />
}

export function SectionRuleThin() {
  return <div className="section-rule-thin" />
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 container-main relative texture-lines">
      <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
        {eyebrow}
      </p>
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </section>
  )
}

export function Container({ children, className = "" }) {
  return <div className={`container-main ${className}`}>{children}</div>
}
