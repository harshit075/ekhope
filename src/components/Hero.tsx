"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  return (
    <section id="hero" className="hero-section flex items-center justify-center">
      <div className="hero-background"></div>
      
      <div className="container relative z-10 text-center flex-col items-center gap-6 glass-panel reveal" style={{ padding: '4rem 2rem', maxWidth: '800px', marginTop: '60px' }}>
          <h1 className="text-secondary mb-6 reveal" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Voice of the <br/>
            <span className="text-gradient-animated" style={{ fontWeight: 800 }}>Voiceless</span>
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto reveal delay-100 opacity-90" style={{ lineHeight: 1.6, fontWeight: 500 }}>
            Creating a kinder world, one rescue at a time. Join our community movement in Indore to feed, protect, and nurture street animals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal delay-200">
            <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR&am=1100" className="btn btn-primary text-lg pulse-btn" style={{ padding: '0.8rem 2.5rem' }}>Donate Now</a>
            <a href="#journey" className="btn btn-outline text-lg bg-white/50" style={{ padding: '0.8rem 2.5rem', backdropFilter: 'blur(4px)' }}>Our Journey</a>
          </div>
        </div>
        
        {/* Floating Abstract Element */}
        <div className="floating-element absolute top-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/20 blur-3xl z-0 pointer-events-none"></div>
        <div className="floating-element absolute bottom-20 left-10 md:left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-secondary/10 blur-3xl z-0 pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      <style jsx>{`
        .hero-section {
          min-height: 95vh;
          position: relative;
          overflow: hidden;
          background-color: var(--background);
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 15% 50%, rgba(217, 119, 54, 0.12), transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(44, 76, 76, 0.08), transparent 40%);
          z-index: 1;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background-color: var(--primary-light);
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(3.5rem, 6vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.35rem);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .glass-panel {
            padding: 3rem 1.5rem !important;
            border: none;
            box-shadow: none;
            background: transparent;
          }
        }
      `}</style>
    </section>
  );
}
