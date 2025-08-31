// src/components/MentoriaSection.js
import React from 'react';

export default function MentoriaSection() {
  return (
    <section id="mentorias" className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Mentorias Personalizadas</h2>
        <p className="mb-6">Agende sessões individuais com o Dr. Fábio e alcance seus objetivos com acompanhamento profissional.</p>
        <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Agendar Mentoria
        </a>
      </div>
    </section>
  );
}
