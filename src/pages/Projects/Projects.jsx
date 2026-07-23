import { motion } from "framer-motion"
import { PageHero, Container, SectionRule } from "../../components/UI/Section"
import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import { projects } from "../../data/projects"

export function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects"
        description="Security tools and research built by our members"
      />

      <SectionRule />

      <section className="py-24 md:py-32 relative texture-lines">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
