import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FinancialSystems } from './components/FinancialSystems';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CreativeTransition } from './components/CreativeTransition';
import { Education } from './components/Education';
import { PersonalSkills } from './components/PersonalSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-white selection:text-black">
      {/* Interactive Custom Cursor Spotlight */}
      <CustomCursor />

      {/* Sticky Blur Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <FinancialSystems />
        <Skills />
        <Experience />
        <Projects />
        <CreativeTransition />
        <Education />
        <PersonalSkills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
