import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
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

// Floating Theme Toggle Button for quick switching from anywhere on the page
const FloatingThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glass-card dark:text-white text-neutral-900 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border dark:border-white/20 border-black/15 cursor-pointer flex items-center justify-center group"
      title={theme === 'dark' ? 'Switch to White / Light Theme' : 'Switch to Dark Obsidian Theme'}
      aria-label="Toggle Theme Mode"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.9)] group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon size={20} className="text-indigo-600 drop-shadow-[0_0_10px_rgba(79,70,229,0.6)] group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
};

export function MainContent() {
  return (
    <div className="min-h-screen dark:bg-[#030303] bg-[#f8f9fc] dark:text-neutral-100 text-neutral-900 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-400">
      {/* Interactive Custom Cursor Spotlight */}
      <CustomCursor />

      {/* Sticky Blur Navbar with Integrated Theme Switcher */}
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

      {/* Floating Theme Mode Toggle */}
      <FloatingThemeToggle />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
