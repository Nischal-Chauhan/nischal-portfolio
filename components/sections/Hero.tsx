import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div>
          <p className="mb-4 text-cyan-400">Hello, I&apos;m</p>

          <h1 className="text-6xl font-bold">{portfolio.name}</h1>

          <h2 className="mt-4 text-2xl text-zinc-300">
            {portfolio.role}
          </h2>

          <p className="mt-6 max-w-xl text-zinc-400">
            {portfolio.tagline}
          </p>
        </div>
      </section>
    </main>
  );
}