"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer section" style={{ backgroundColor: 'var(--secondary)', color: 'white', paddingBottom: '2rem' }}>
      <div className="container grid md:grid-cols-2 gap-8 justify-between">
        <div className="footer-brand">
          <h2 className="text-white mb-4">Ekhope.</h2>
          <p className="text-white" style={{ opacity: 0.8, maxWidth: '400px' }}>
            Giving a powerful voice to the voiceless and creating a kinder world, one rescue at a time. Join our community movement.
          </p>
        </div>
        <div className="footer-social text-right md:text-right text-left">
          <h3 className="text-white mb-4">Connect With Us</h3>
          <a href="https://instagram.com/ek_hopeeee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-start md:justify-end text-white" style={{ opacity: 0.9, transition: 'opacity 0.2s ease' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.9'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>@ek_hopeeee</span>
          </a>
        </div>
      </div>
      <div className="container mt-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', opacity: 0.6, fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Ekhope. All rights reserved.
      </div>
    </footer>
  );
}
