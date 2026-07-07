"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  return (
    <section id="hero" className="hero-section flex items-center justify-center">
      <div className="hero-background"></div>
      
      <div className="container relative z-10 text-center flex-col items-center gap-6 glass-panel reveal" style={{ padding: '4rem 2rem', maxWidth: '800px', marginTop: '60px' }}>
        <div className="badge mb-2">Non-Profit Rescue Organization</div>
        <h1 className="hero-title text-secondary">
          The Voice of the <br /> <span className="text-primary">Voiceless</span>
        </h1>
        <p className="hero-subtitle text-muted mt-2 font-serif">
          Giving a powerful voice to the voiceless and creating a kinder world, one rescue at a time. Join us in our journey of compassion.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="#donate" className="btn btn-primary">Donate Now</a>
          <a href="#journey" className="btn btn-secondary">Our Journey</a>
        </div>
      </div>
      
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
