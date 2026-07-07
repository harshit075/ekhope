"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section container" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto glass-panel p-8 reveal" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
        <div>
          <div className="badge mb-4" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Get Involved</div>
          <h2 className="text-secondary mb-4" style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>Join Our Community</h2>
          <p className="text-muted mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Whether you want to volunteer for our feeding drives, report an injured animal, or just say hello, we’d love to hear from you. Together, we can make a difference.
          </p>
          <div className="flex items-center gap-4 text-secondary font-medium mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Indore, Madhya Pradesh</span>
          </div>
          <div className="flex items-center gap-4 text-secondary font-medium">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a href="https://instagram.com/ek.hope" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@ek.hope</a>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="card text-center flex-col items-center justify-center p-8 border-primary" style={{ border: '2px solid var(--primary)', backgroundColor: 'var(--primary-light)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 className="text-2xl mb-2">Thank You!</h3>
              <p className="text-muted">Your message has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-secondary">Name</label>
                <input type="text" required className="w-full" placeholder="Your full name" style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit', fontSize: '1rem' }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-secondary">Phone Number</label>
                <input type="tel" required className="w-full" placeholder="Your contact number" style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit', fontSize: '1rem' }} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-secondary">Message / Reason for Contact</label>
                <textarea required className="w-full" rows={4} placeholder="How can we help?" style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">Send Message</button>
            </form>
          )}
        </div>
      </div>
      
      <style jsx>{`
        input:focus, textarea:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px var(--primary-light);
        }
      `}</style>
    </section>
  );
}
