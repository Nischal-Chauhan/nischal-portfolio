import { Award } from "lucide-react";

import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <Container>
        <SectionHeading
          subtitle="Continuous Learning"
          title="Certifications"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {portfolio.certifications.map((certification) => (
            <FadeIn key={certification.title}>
              <article className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-cyan-300">
                    <Award size={28} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {certification.title}
                    </h3>

                    <p className="mt-2 text-cyan-400">
                      {certification.issuer}
                    </p>

                    <span className="mt-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                      {certification.year}
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}