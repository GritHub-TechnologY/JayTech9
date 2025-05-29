// src/components/Hero.jsx
import React from 'react';
import heroImage from '@/assets/images/hero.jpg';

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
          Empowering Growth with Smart Tech Solutions
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          At Jaytech9, we help businesses grow and support farmers with tailored digital solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-green hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            Start Your Project
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-teal px-6 py-3 rounded-lg">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}