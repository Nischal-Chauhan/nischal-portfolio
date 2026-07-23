import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          subtitle="Things I've Built"
          title="Featured Projects"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <FadeIn key={project.title}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-yellow-300 backdrop-blur">
                      <Sparkles size={14} />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo */}
                  {project.live && (
                    <div className="pt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}