import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import UserProfile from "./components/UserProfile";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";
import ViewResume from "./components/ViewResume";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[rgb(17,20,24)]">
      <div className="flex flex-col gap-10 mt-0">
        <ThemeToggle />
        <UserProfile />
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <ViewResume />
        <SocialLinks />
      </div>
      <BackToTop />
    </div>
  );
}
