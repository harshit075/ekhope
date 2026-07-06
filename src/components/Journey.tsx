"use client";

import React from 'react';

export default function Journey() {
  return (
    <section id="journey" className="section container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="journey-content">
          <h2 className="text-secondary mb-4">Our Journey</h2>
          <p className="text-muted mb-4">
            Founded in 2023 in Indore, Ekhope began with a simple, compassionate act: feeding hungry street dogs. As we spent more time on the streets, we encountered countless injured and neglected animals desperately needing medical help. What started as a daily feeding drive quickly transformed into a full-scale rescue mission.
          </p>
          <p className="text-muted mb-4">
            After collaborating with an animal shelter to rescue over 50 dogs, the mission expanded to my hometown. Today, <span className="font-semibold text-primary">ek_hopeeee</span> has proudly rescued over 120+ dogs, but our hands and hearts don’t stop there.
          </p>
          <p className="text-muted">
            We actively serve street cows and extend every possible effort to protect and nurture all street animals. What began as a personal calling has evolved into a growing community movement. True to its name, Ekhope has truly become everyone’s hope.
          </p>
        </div>
        
        <div className="journey-stats grid grid-cols-2 gap-4">
          <div className="card text-center">
            <h3 className="text-primary" style={{ fontSize: '2.5rem' }}>120+</h3>
            <p className="text-muted font-medium mt-2">Dogs Rescued</p>
          </div>
          <div className="card text-center">
            <h3 className="text-primary" style={{ fontSize: '2.5rem' }}>50+</h3>
            <p className="text-muted font-medium mt-2">Collaborative Rescues</p>
          </div>
          <div className="card text-center" style={{ gridColumn: 'span 2' }}>
            <h3 className="text-primary" style={{ fontSize: '2.5rem' }}>2023</h3>
            <p className="text-muted font-medium mt-2">Year Founded</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .journey-content h2 {
          font-size: 2.5rem;
        }
        .journey-content p {
          font-size: 1.125rem;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
}
