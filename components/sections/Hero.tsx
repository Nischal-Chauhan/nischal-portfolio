import Image from "next/image";
import { Brain, Boxes, Cpu, Database } from "lucide-react";

import { portfolio } from "@/data/portfolio";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import TechBadge from "@/components/ui/TechBadge";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center overflow-hidden">
      <Container className="flex flex-col items-center justify-between gap-16 pt-24 lg:flex-row">
        {/* Left Side */}
        <FadeIn className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-zinc-300 sm:text-3xl">
            {portfolio.role}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {portfolio.tagline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button>
              Download Resume
            </Button>

            <Button variant="secondary">
              Contact Me
            </Button>
          </div>
        </FadeIn>

        {/* Right Side */}
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <Image
              src="/images/profile.jpeg"
              alt="Nischal Chauhan"
              width={450}
              height={600}
              priority
              className="relative rounded-3xl object-cover shadow-2xl"
            />

            {/* Floating Tech Badges */}
            <TechBadge
              icon={<Brain size={18} />}
              label="AI"
              className="-left-14 top-10 hidden lg:flex"
            />

            <TechBadge
              icon={<Cpu size={18} />}
              label="FastAPI"
              className="-right-16 top-32 hidden lg:flex"
            />

            <TechBadge
              icon={<Database size={18} />}
              label="Docker"
              className="-left-12 bottom-24 hidden lg:flex"
            />

            <TechBadge
              icon={<Boxes size={18} />}
              label="Python"
              className="-right-12 bottom-12 hidden lg:flex"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}