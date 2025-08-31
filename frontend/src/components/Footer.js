// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center">
      <div className="mb-4">
        <a href="#" className="mx-2 hover:text-blue-400 transition">Instagram</a>
        <a href="#" className="mx-2 hover:text-blue-400 transition">LinkedIn</a>
        <a href="#" className="mx-2 hover:text-blue-400 transition">WhatsApp</a>
      </div>
      <p>© 2025 NutriPlataforma. Todos os direitos reservados.</p>
    </footer>
  );
}
