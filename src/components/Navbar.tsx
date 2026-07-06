"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center" style={{ height: '100%' }}>
        <a href="#" className="logo text-secondary font-bold" style={{ fontSize: '1.5rem' }}>
          Ekhope.
        </a>
        <div className="nav-links flex gap-8 items-center hidden md:flex">
          <a href="#journey" className="nav-link font-medium">Our Journey</a>
          <a href="#donate" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Donate</a>
        </div>
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 50;
          transition: all 0.3s ease;
          background-color: transparent;
        }
        .navbar.scrolled {
          background-color: rgba(253, 251, 247, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          height: 70px;
        }
        .nav-link {
          color: var(--text-main);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
