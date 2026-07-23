import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionHeading
          subtitle="What I Work With"
          title="Technical Skills"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((category) => (
            <FadeIn key={category.title}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}