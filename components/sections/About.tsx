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
          title="About Me"
        />

        <div className="mx-auto max-w-4xl">
          <p className="text-center text-lg leading-9 text-zinc-400">
            I am an AI & Python Developer passionate about building
            AI-powered applications, scalable backend APIs, automation
            solutions, and modern web experiences. I enjoy solving
            real-world problems using Python, FastAPI, Docker, AI
            technologies, and cloud-native development practices.
          </p>

          <p className="mt-8 text-center text-lg leading-9 text-zinc-400">
            My focus is on writing clean, maintainable code while
            continuously learning modern technologies and delivering
            software that creates real value.
          </p>
        </div>
      </Container>
    </section>
  );
}