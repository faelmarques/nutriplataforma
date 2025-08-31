import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoursesCarousel from '../components/CoursesCarousel';
import MentoriaSection from '../components/MentoriaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <CoursesCarousel />
      <MentoriaSection />
      <Footer />
    </div>
  );
}
