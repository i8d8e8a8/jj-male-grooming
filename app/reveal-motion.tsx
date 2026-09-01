'use client';

import {useEffect} from 'react';

export default function RevealMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-reveal-root]');
    if (!root) return;

    const faqItems = [...root.querySelectorAll<HTMLElement>('.faqItem')];
    const closeFaqItem = (item: HTMLElement) => {
      item.classList.remove('is-open');
      item.classList.add('is-closed');
      item.querySelector<HTMLButtonElement>('.faqQuestion')?.setAttribute('aria-expanded', 'false');
    };
    const openFaqItem = (item: HTMLElement) => {
      item.classList.add('is-open');
      item.classList.remove('is-closed');
      item.querySelector<HTMLButtonElement>('.faqQuestion')?.setAttribute('aria-expanded', 'true');
    };
    const cleanups = faqItems.map((item) => {
      const button = item.querySelector<HTMLButtonElement>('.faqQuestion');
      const enter = () => openFaqItem(item);
      const leave = () => closeFaqItem(item);
      const click = (event: MouseEvent) => {
        if (event.detail > 0) openFaqItem(item);
        else item.classList.contains('is-open') ? closeFaqItem(item) : openFaqItem(item);
      };
      item.addEventListener('pointerenter', enter);
      item.addEventListener('pointerleave', leave);
      button?.addEventListener('click', click);
      return () => {
        item.removeEventListener('pointerenter', enter);
        item.removeEventListener('pointerleave', leave);
        button?.removeEventListener('click', click);
      };
    });
    const faqVisibilityObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (!entry.isIntersecting) closeFaqItem(entry.target as HTMLElement); });
    }, {threshold: 0.12}) : null;
    faqItems.forEach((item) => faqVisibilityObserver?.observe(item));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {
      cleanups.forEach((cleanup) => cleanup());
      faqVisibilityObserver?.disconnect();
    };

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
    return () => {
      observer.disconnect();
      faqVisibilityObserver?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
