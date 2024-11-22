'use client'

import { useEffect } from 'react'

export function useIntersectionObserver() {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
        } else {
          entry.target.setAttribute('data-visible', 'false');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    const targets = document.querySelectorAll('.opacity-0');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}
