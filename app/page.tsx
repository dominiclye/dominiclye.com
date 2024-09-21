import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <div className="">
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </div>
    </main>
  );
}
