import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <div className="">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
