import MyName from "./components/MyName";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0f0a17]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <MyName />
        <AboutMe />
        <TechStacks />
        <Projects />
      </div>
    </main>
  );
}
