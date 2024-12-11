import MyName from "./components/MyName";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0f0a17] overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto px-4 md:px-12 mt-20 max-w-full">
        <MyName />
        <AboutMe />
        <TechStacks />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
