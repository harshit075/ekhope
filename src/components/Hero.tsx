"use client";

import React from 'react';

export default function Hero() {
  return (
    <section className="section hero-section flex items-center justify-center">
      <div className="container text-center flex-col items-center gap-4">
        <h1 className="hero-title text-secondary">The Voice of the Voiceless</h1>
        <p className="hero-subtitle text-muted mt-4 font-serif">
          Giving a powerful voice to the voiceless and creating a kinder world, one rescue at a time.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#donate" className="btn btn-primary">Donate Now</a>
          <a href="#journey" className="btn btn-secondary">Our Journey</a>
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          min-height: 80vh;
          background: linear-gradient(to bottom, #fdfbf7, #f5eadd);
          position: relative;
        }
        .hero-title {
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </section>
  );
}
