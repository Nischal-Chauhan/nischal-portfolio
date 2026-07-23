import { Mail, Phone, MapPin, Link, Download } from "lucide-react";

import { portfolio } from "@/data/portfolio";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionHeading
          subtitle="Get In Touch"
          title="Let&apos;s Work Together"
        />

        <FadeIn>
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <p className="mx-auto max-w-2xl text-center leading-8 text-zinc-400">
            I&apos;m always interested in discussing AI, Python development,
            backend engineering, automation, and exciting opportunities.
            Feel free to reach out through any of the channels below.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-white">
                    {portfolio.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${portfolio.contact.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-white">
                    {portfolio.contact.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-white">
                    {portfolio.contact.location}
                  </p>
                </div>
              </div>

              <a
                href={portfolio.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Link className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-zinc-500">LinkedIn</p>
                  <p className="text-white">
                    View Profile
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={portfolio.hero.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href={`mailto:${portfolio.contact.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}