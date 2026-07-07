"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Donation() {
  useScrollReveal();

  return (
    <section id="donate" className="section container text-center">
      <div className="donation-wrapper mx-auto max-w-4xl">
        <div className="badge mb-4 reveal" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Make an Impact</div>
        <h2 className="text-secondary mb-6 reveal delay-100" style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>Support Our Cause</h2>
        <p className="text-muted mb-12 font-serif reveal delay-200" style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
          Your contribution helps us provide medical care, food, and shelter for street animals in need. Every single donation brings us closer to a kinder world.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
          <div className="card text-center flex-col items-center reveal delay-100">
            <div className="icon-wrapper mb-6" style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: '50%' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="mb-3 text-xl">One-Time Gift</h3>
            <p className="text-muted mb-6 text-sm" style={{ flexGrow: 1 }}>Make an immediate impact on an animal's life today.</p>
            <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR" className="btn btn-outline w-full block">Donate Now</a>
          </div>
          
          <div className="card text-center flex-col items-center reveal delay-200" style={{ border: '2px solid var(--primary)', transform: 'scale(1.05)', zIndex: 2, position: 'relative' }}>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full" style={{ position: 'absolute', top: '-12px', right: '10%', backgroundColor: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold' }}>RECOMMENDED</div>
            <div className="icon-wrapper mb-6" style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: '50%' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="mb-3 text-xl">Monthly Sponsor</h3>
            <p className="text-muted mb-6 text-sm" style={{ flexGrow: 1 }}>Provide ongoing support for our daily feeding drives.</p>
            <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR" className="btn btn-primary w-full block">Sponsor Now</a>
          </div>
          
          <div className="card text-center flex-col items-center reveal delay-300">
            <div className="icon-wrapper mb-6" style={{ padding: '1rem', backgroundColor: 'var(--primary-light)', borderRadius: '50%' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5"></path>
              </svg>
            </div>
            <h3 className="mb-3 text-xl">Medical Fund</h3>
            <p className="text-muted mb-6 text-sm" style={{ flexGrow: 1 }}>Help us treat injured and neglected street animals.</p>
            <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR" className="btn btn-outline w-full block">Contribute</a>
          </div>
        </div>
      </div>
    </section>
  );
}
