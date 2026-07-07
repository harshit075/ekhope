import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Gallery from '@/components/Gallery';
import Donation from '@/components/Donation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Journey />
      <Gallery />
      <Donation />
      <Contact />
      <Footer />
    </main>
  );
}
