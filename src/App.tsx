import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { AboutSkills } from './components/AboutSkills';
import { ClientsExperience } from './components/ClientsExperience';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { WorkPage } from './pages/WorkPage';

const getPathname = () => window.location.pathname;

function App() {
  const [pathname, setPathname] = useState(getPathname);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const handleRouteChange = () => setPathname(getPathname());
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (!link || link.target || link.origin !== window.location.origin) {
        return;
      }

      const href = link.getAttribute('href');

      if (!href || href.startsWith('mailto:')) {
        return;
      }

      if (href.startsWith('#')) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', href);
      handleRouteChange();

      window.requestAnimationFrame(() => {
        if (link.hash) {
          document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        lenisRef.current?.scrollTo(0, { immediate: true });
        window.scrollTo({ top: 0 });
      });
    };

    window.addEventListener('popstate', handleRouteChange);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const isWorkPage = pathname === '/work';

  return (
    <div className="bg-background text-foreground selection:bg-foreground selection:text-background min-h-screen">
      <Navbar isWorkPage={isWorkPage} />
      {isWorkPage ? (
        <WorkPage />
      ) : (
        <main>
          <Hero />
          <SelectedWorks />
          <AboutSkills />
          <ClientsExperience />
          <ContactCTA />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
