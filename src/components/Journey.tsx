"use client";

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Journey() {
  useScrollReveal();

  return (
    <section id="journey" className="section container" style={{ position: 'relative' }}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="text-center mb-16 reveal">
        <div className="badge mb-4" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Story</div>
        <h2 className="text-secondary mb-6" style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>How It Started</h2>
        <p className="text-muted mx-auto max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
          What began as a personal calling in Indore has evolved into a growing community movement, giving a powerful voice to the voiceless.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Milestone 1 */}
        <div className="card card-3d reveal delay-100 flex flex-col h-full" style={{ borderTop: '4px solid var(--primary)', padding: '2.5rem 2rem' }}>
          <div className="icon-wrapper mb-6 flex items-center justify-center" style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-light)', borderRadius: '16px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-secondary mb-4">The First Step</h3>
          <p className="text-muted text-sm" style={{ lineHeight: 1.7, flexGrow: 1 }}>
            Founded in 2023, Ekhope began with a simple, compassionate act: feeding hungry street dogs. We soon encountered countless injured and neglected animals desperately needing help.
          </p>
        </div>

        {/* Milestone 2 */}
        <div className="card card-3d reveal delay-200 flex flex-col h-full" style={{ borderTop: '4px solid var(--primary)', padding: '2.5rem 2rem' }}>
          <div className="icon-wrapper mb-6 flex items-center justify-center" style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-light)', borderRadius: '16px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-secondary mb-4">The Expansion</h3>
          <p className="text-muted text-sm" style={{ lineHeight: 1.7, flexGrow: 1 }}>
            What started as a daily feeding drive quickly transformed into a full-scale rescue mission. We collaborated with local animal shelters to expand our reach beyond Indore.
          </p>
        </div>

        {/* Milestone 3 */}
        <div className="card card-3d reveal delay-300 flex flex-col h-full" style={{ borderTop: '4px solid var(--secondary)', padding: '2.5rem 2rem', background: 'linear-gradient(to bottom, #ffffff, #f9f9f9)' }}>
          <div className="icon-wrapper mb-6 flex items-center justify-center" style={{ width: '60px', height: '60px', backgroundColor: 'var(--secondary-light)', borderRadius: '16px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-secondary mb-4">Ekhope Today</h3>
          <p className="text-muted text-sm" style={{ lineHeight: 1.7, flexGrow: 1 }}>
            Today, we actively serve street cows and extend every possible effort to protect all street animals. True to its name, <span className="font-bold text-secondary">ek.hope</span> has become everyone’s hope.
          </p>
        </div>
      </div>

      {/* Impact Stats Banner */}
      <div className="reveal delay-200 rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'var(--secondary)', padding: '3rem 2rem' }}>
        <div className="absolute inset-0 bg-primary/10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(217, 119, 54, 0.15) 0%, transparent 50%)' }}></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          <div className="text-center">
            <h4 className="text-primary text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={120} suffix="+" />
            </h4>
            <p className="text-white/80 font-medium">Dogs Rescued</p>
          </div>
          <div className="text-center">
            <h4 className="text-primary text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </h4>
            <p className="text-white/80 font-medium">Collaborations</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <h4 className="text-primary text-4xl md:text-5xl font-bold mb-2">
              <AnimatedCounter end={2023} duration={1500} />
            </h4>
            <p className="text-white/80 font-medium">Year Founded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
