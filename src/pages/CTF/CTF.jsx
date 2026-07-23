import { motion } from "framer-motion"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { Button } from "../../components/UI/Button"
import { upcomingCTFs, difficultyColors } from "../../data/ctf"

export function CTF() {
  return (
    <>
      <PageHero
        eyebrow="CTF"
        title="Capture The Flag"
        description="Upcoming CTF competitions and how to participate."
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 text-muted-foreground">
              Upcoming
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              CTF Schedule
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            {upcomingCTFs.map((ctf, i) => (
              <motion.article
                key={ctf.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border-2 border-foreground p-6 md:p-8 transition-colors hover:bg-foreground hover:text-background group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`font-mono text-xs tracking-widest uppercase px-2 py-0.5 ${
                      difficultyColors[ctf.difficulty]
                    }`}
                  >
                    {ctf.difficulty}
                  </span>
                  <span className="font-mono text-xs tracking-widest opacity-60">
                    {new Date(ctf.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight mb-3">
                  {ctf.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 mb-4">
                  {ctf.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm opacity-80">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} strokeWidth={1.5} /> {ctf.platform}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} strokeWidth={1.5} /> {ctf.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} strokeWidth={1.5} /> {ctf.teams}
                  </span>
                </div>
                <a href={ctf.registrationLink}>
                  <Button variant="secondary" className="group-hover:border-background group-hover:text-background">
                    Register <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </a>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule />

      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 texture-vertical-light" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60">
              Getting Started
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How to participate
            </h2>
            <ol className="space-y-4">
              {[
                "Form a team of 1-4 members (or register individually if allowed).",
                "Register via the link on each CTF card above.",
                "Join the AEGIS WhatsApp group for updates and coordination.",
                "Access the CTF platform on the event day using the credentials shared.",
                "Solve challenges, submit flags, and track your score on the leaderboard.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-2 border-background p-4 transition-colors hover:bg-background hover:text-foreground group"
                >
                  <span className="font-mono text-xs tracking-widest opacity-60 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  )
}
