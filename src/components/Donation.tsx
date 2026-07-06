"use client";

import React from 'react';

export default function Donation() {
  return (
    <section id="donate" className="section container text-center">
      <div className="donation-wrapper max-w-4xl mx-auto">
        <h2 className="text-secondary mb-4">Support Our Cause</h2>
        <p className="text-muted mb-8 font-serif" style={{ fontSize: '1.25rem' }}>
          Your contribution helps us provide medical care, food, and shelter for street animals in need. Every single donation brings us closer to a kinder world.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="card text-center flex-col items-center">
            <div className="icon-wrapper mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="mb-2">One-Time Gift</h3>
            <p className="text-muted mb-4 text-sm">Make an immediate impact on an animal's life today.</p>
            <button className="btn btn-secondary w-full">Donate Now</button>
          </div>
          
          <div className="card text-center flex-col items-center border-primary" style={{ border: '2px solid var(--primary)', transform: 'scale(1.05)' }}>
            <div className="icon-wrapper mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="mb-2">Monthly Sponsor</h3>
            <p className="text-muted mb-4 text-sm">Provide ongoing support for our daily feeding drives.</p>
            <button className="btn btn-primary w-full">Sponsor</button>
          </div>
          
          <div className="card text-center flex-col items-center">
            <div className="icon-wrapper mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4l3-9 5 18 3-9h5"></path>
              </svg>
            </div>
            <h3 className="mb-2">Medical Fund</h3>
            <p className="text-muted mb-4 text-sm">Help us treat injured and neglected street animals.</p>
            <button className="btn btn-secondary w-full">Contribute</button>
          </div>
        </div>
      </div>
    </section>
  );
}
