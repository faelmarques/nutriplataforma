// src/components/CoursesSection.js
import React from 'react';

export default function CoursesSection() {
  const courses = [
    { title: 'Nutrição Básica', desc: 'Aprenda fundamentos da nutrição.' },
    { title: 'Alimentação Saudável', desc: 'Princípios de alimentação equilibrada.' },
    { title: 'Planejamento de Refeições', desc: 'Organize suas refeições diárias.' },
  ];

  return (
    <section id="cursos" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((c, i) => (
          <div key={i} className="p-6 bg-blue-50 rounded shadow hover:scale-105 transition">
            <h3 className="font-bold text-xl mb-2">{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
