'use client';

import {useEffect} from 'react';

export default function RevealMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-reveal-root]');
    if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = [...root.querySelectorAll<HTMLElement>('section:not(.hero)')];
    sections.forEach((section) => section.classList.add('reveal'));
    root.classList.add('motion-ready');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {rootMargin: '0px 0px -12% 0px', threshold: 0.08});

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
