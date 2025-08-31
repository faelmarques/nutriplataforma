// src/components/CoursesCarousel.js
import React from "react";
import { motion } from "framer-motion";

export default function CoursesCarousel() {
  const cursos = [
    { title: "Nutrição Inteligente", desc: "Aprenda os princípios de uma nutrição moderna e prática." },
    { title: "Saúde & Performance", desc: "Otimize sua alimentação para alcançar alta performance." },
    { title: "Mentoria Exclusiva", desc: "Acompanhamento direto com o Dr. Fábio para seus objetivos." },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 drop-shadow-sm">
        Cursos Exclusivos
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-4 max-w-6xl mx-auto">
        {cursos.map((curso, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="min-w-[280px]"
          >
            <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {curso.title}
              </h3>
              <p className="text-gray-600 text-sm">{curso.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
