import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <Container>
        <SectionHeading
          subtitle="Where I Studied"
          title="Education"
        />

        <div className="relative mt-16 border-l border-cyan-500/20 pl-10">
          {portfolio.education.map((item) => (
            <FadeIn key={item.degree}>
              <div className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[48px] top-3 h-4 w-4 rounded-full border-4 border-black bg-cyan-400" />

                <article className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-cyan-400">
                        {item.institute}
                      </p>
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                      {item.duration}
                    </span>
                  </div>
                </article>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}