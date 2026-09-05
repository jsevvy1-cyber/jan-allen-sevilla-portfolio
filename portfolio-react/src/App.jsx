import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/Techstack';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Snowfall from './components/Snowfall';
import LightModeBackground from './components/LightModeBackground';

export default function App() {
  return (
    <>
      <Snowfall />
      <LightModeBackground />
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Jan Allen Sevilla. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}