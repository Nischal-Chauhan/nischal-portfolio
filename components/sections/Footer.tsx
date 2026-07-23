import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              NC
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
              AI & Python Developer passionate about building AI-powered
              applications, scalable backend systems, and modern web
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {portfolio.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © {year} Nischal Chauhan. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-cyan-400">Next.js</span>,
            {" "}
            <span className="text-cyan-400">TypeScript</span>
            {" "}&
            {" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}