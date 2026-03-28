import { useEffect } from 'react';

export default function useScrollReveal(isLoaded) {
  useEffect(() => {
    if (!isLoaded) return;

    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    return () => {
      revealElements.forEach(el => revealOnScroll.unobserve(el));
    };
  }, [isLoaded]);
}