"use client";

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Journey() {
  useScrollReveal();

  return (
    <section id="journey" className="section container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="journey-content reveal">
          <div className="badge mb-4" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Story</div>
          <h2 className="text-secondary mb-6" style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>How It Started</h2>
          <div className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <p className="mb-4">
              Founded in 2023 in Indore, Ekhope began with a simple, compassionate act: feeding hungry street dogs. As we spent more time on the streets, we encountered countless injured and neglected animals desperately needing medical help.
            </p>
            <p className="mb-4">
              What started as a daily feeding drive quickly transformed into a full-scale rescue mission. After collaborating with an animal shelter to rescue over 50 dogs, the mission expanded to my hometown. Today, <span className="font-bold text-secondary">ek.hope</span> has proudly rescued over 120+ dogs, but our hands and hearts don’t stop there.
            </p>
            <p>
              We actively serve street cows and extend every possible effort to protect and nurture all street animals. True to its name, Ekhope has become everyone’s hope.
            </p>
          </div>
        </div>
        
        <div className="journey-stats grid grid-cols-2 gap-6 reveal delay-200">
          <div className="card text-center flex-col items-center justify-center">
            <AnimatedCounter end={120} suffix="+" />
            <p className="text-secondary font-semibold mt-3 text-lg">Dogs Rescued</p>
          </div>
          <div className="card text-center flex-col items-center justify-center">
            <AnimatedCounter end={50} suffix="+" />
            <p className="text-secondary font-semibold mt-3 text-lg">Collaborations</p>
          </div>
          <div className="card text-center flex-col items-center justify-center" style={{ gridColumn: 'span 2' }}>
            <AnimatedCounter end={2023} duration={1500} />
            <p className="text-secondary font-semibold mt-3 text-lg">Year Founded</p>
          </div>
        </div>
      </div>
    </section>
  );
}
