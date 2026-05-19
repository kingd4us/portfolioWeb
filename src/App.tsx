import { useEffect } from 'react';
import { ThemeProvider } from './providers/theme-provider';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  
  // The Scroll Spy: Watches sections and updates the URL hash
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Silently update the URL hash without a page jump
            window.history.replaceState(null, '', `#${entry.target.id}`);
            
            // Dispatch a custom event so the Header knows the URL changed
            window.dispatchEvent(new Event('hashchange'));
          }
        });
      },
      {
        // Triggers exactly when the section hits the middle 50% of the screen
        rootMargin: '-40% 0px -40% 0px' 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <div className="flex flex-col gap-32 pb-24">
          <section id="home" className="pt-12">
            <Home />
          </section>
          
          <section id="work" className="scroll-mt-32">
            <AllProjects />
          </section>
          
          <section id="skills" className="scroll-mt-32">
            <Skills />
          </section>
          
          <section id="contact" className="scroll-mt-32">
            <Contact />
          </section>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}