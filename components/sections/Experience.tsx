import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>
        <SectionHeading
          subtitle="Where I've Worked"
          title="Experience"
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-zinc-800" />

          <div className="space-y-12">
            {portfolio.experience.map((job) => (
              <FadeIn key={`${job.company}-${job.role}`}>
                <div className="relative pl-16">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-zinc-900">
                    <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {job.role}
                        </h3>

                        <p className="mt-1 text-lg text-cyan-400">
                          {job.company}
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                          {job.location}
                        </p>
                      </div>

                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        {job.duration}
                      </span>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-zinc-300"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}