import { motion } from "framer-motion"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { TeamCard } from "../../components/TeamCard/TeamCard"
import { facultyCoordinator, president, vicePresidents, heads, coreMembers } from "../../data/team"

export function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="People Behind the Initiative"
        description="Faculty, industry mentors, and student coordinators"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-diagonal">
        <Container>
          {/* Faculty Coordinator */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 border-b-2 border-foreground pb-4">
              Faculty Coordinator
            </h2>
            <p className="text-muted-foreground mb-8">Faculty responsible for academic guidance and lab coordination.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <TeamCard member={facultyCoordinator} />
              </motion.div>
            </div>
          </div>

          {/* President */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 border-b-2 border-foreground pb-4">
              President
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <TeamCard member={president} />
              </motion.div>
            </div>
          </div>

          {/* Vice President */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 border-b-2 border-foreground pb-4">
              Vice President
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {vicePresidents.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Heads */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 border-b-2 border-foreground pb-4">
              Heads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {heads.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Members */}
          {coreMembers.length > 0 && (
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 border-b-2 border-foreground pb-4">
                Core Members
              </h2>
              <p className="text-muted-foreground mb-8">Students supporting lab operations, activities and peer learning.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {coreMembers.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
