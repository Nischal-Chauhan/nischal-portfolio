import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <Container>
        <SectionHeading
          subtitle="Get To Know Me"
          title={portfolio.about.title}
        />

        <div className="mx-auto max-w-4xl">
          <p className="text-center text-lg leading-9 text-zinc-400">
            {portfolio.about.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {portfolio.about.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}