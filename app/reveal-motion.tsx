'use client';

import {useEffect} from 'react';

export default function RevealMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-reveal-root]');
    if (!root) return;

    const cleanups: Array<() => void> = [];
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      root.querySelectorAll<HTMLDetailsElement>('.faq details').forEach((detail) => {
        const open = () => { detail.open = true; };
        const close = () => { if (!detail.matches(':focus-within')) detail.open = false; };
        detail.addEventListener('mouseenter', open);
        detail.addEventListener('mouseleave', close);
        detail.addEventListener('focusin', open);
        detail.addEventListener('focusout', close);
        cleanups.push(() => {
          detail.removeEventListener('mouseenter', open);
          detail.removeEventListener('mouseleave', close);
          detail.removeEventListener('focusin', open);
          detail.removeEventListener('focusout', close);
        });
      });
    }

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const sections = [...root.querySelectorAll<HTMLElement>('section:not(.hero)')];
    sections.forEach((section) => section.classList.add('reveal'));
    root.classList.add('motion-ready');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return () => cleanups.forEach((cleanup) => cleanup());
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {rootMargin: '0px 0px -12% 0px', threshold: 0.08});

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
