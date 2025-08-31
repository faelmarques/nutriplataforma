// src/components/Hero.js
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-purple-300 via-blue-200 to-green-200 animate-gradient-x"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="hero-title mb-4 animate-fadeIn">
          Transforme sua Nutrição com Dr. Fábio
        </h1>
        <p className="text-lg md:text-xl mb-6 text-black animate-fadeIn delay-200">
          Cursos e mentorias exclusivas para atingir seu melhor estilo de vida.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-110 hover:shadow-2xl transition transform duration-300 animate-fadeIn delay-400">
          Comece Agora
        </button>
      </div>
    </section>
  );
}
