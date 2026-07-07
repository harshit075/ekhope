"use client";

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    // Trigger once on mount to show items already in view
    handleScrollReveal();

    window.addEventListener('scroll', handleScrollReveal);
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);
}
