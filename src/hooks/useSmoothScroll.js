import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

/**
 * Force scroll position to top (works with Lenis & native scrolling)
 */
export function scrollToTop(immediate = true) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Initializes Lenis smooth scrolling.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
      window.__lenis = null;
    };
  }, []);
}
