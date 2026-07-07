"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  useScrollReveal();

  // Placeholder images - instruct user to replace with actual Instagram pics in public folder
  const images = [
    "/ekhope_profile.jpg", // From ek.hope Instagram!
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800", // Two dogs playing
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", // Street dog portrait
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800", // Cute dog sleeping
    "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=800", // Dog with trusting eyes
    "https://images.unsplash.com/photo-1615814041123-b6845371c1ce?auto=format&fit=crop&q=80&w=800", // Happy rescue dog
  ];

  return (
    <section id="gallery" className="section container" style={{ overflow: 'hidden' }}>
      <div className="text-center mb-10 reveal">
        <h2 className="text-secondary mb-4" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>Our Rescues in Action</h2>
        <p className="text-muted max-w-4xl mx-auto" style={{ fontSize: '1.125rem' }}>
          Glimpses of the lives we've touched. Follow us on Instagram <a href="https://instagram.com/ek.hope" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">@ek.hope</a> for more stories.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`gallery-item reveal delay-${(index % 3) * 100}`}
          >
            <div className="image-wrapper">
              <img src={src} alt={`Rescue animal ${index + 1}`} loading="lazy" />
              <div className="overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        
        .gallery-item {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          aspect-ratio: 1 / 1;
        }
        
        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gallery-item:hover img {
          transform: scale(1.08);
        }
        
        .gallery-item:hover .overlay {
          opacity: 1;
        }
        
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
