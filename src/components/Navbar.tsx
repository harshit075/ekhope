"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center h-full">
        <a href="#" className="logo text-secondary font-bold flex items-center gap-2" style={{ fontSize: '1.75rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'var(--primary)' }}>Ek</span>hope.
        </a>
        
        {/* Desktop Nav */}
        <div className="nav-links flex gap-8 items-center hidden md:flex">
          <a href="#journey" className="nav-link font-medium">Our Story</a>
          <a href="#donate" className="nav-link font-medium">Support</a>
          <a href="#contact" className="nav-link font-medium">Contact</a>
          <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR&am=1100" className="btn btn-primary pulse-btn" style={{ padding: '0.6rem 1.75rem' }}>Donate</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay md:hidden">
          <div className="flex-col gap-6 text-center p-8">
            <a href="#journey" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#donate" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Support</a>
            <a href="#contact" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="upi://pay?pa=8305134724@ybl&pn=Ekhope&cu=INR&am=1100" className="btn btn-primary pulse-btn mt-4" onClick={() => setMobileMenuOpen(false)}>Donate Now</a>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 90px;
          z-index: 50;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: transparent;
        }
        .navbar.scrolled {
          background-color: var(--surface-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: var(--shadow-sm);
          height: 75px;
          border-bottom: 1px solid rgba(255,255,255,0.5);
        }
        .nav-link {
          color: var(--text-main);
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-toggle {
          display: none;
        }
        .mobile-nav-overlay {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--surface);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: var(--shadow-sm);
          animation: slideDown 0.3s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }
          .md\\:hidden {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
