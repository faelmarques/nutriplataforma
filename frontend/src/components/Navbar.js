// src/components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">NutriPlataforma</div>
      <div className="space-x-4">
        <a href="#cursos" className="hover:text-blue-500 transition">Cursos</a>
        <a href="#mentorias" className="hover:text-blue-500 transition">Mentorias</a>
        <a href="#depoimentos" className="hover:text-blue-500 transition">Depoimentos</a>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Login
        </a>
      </div>
    </nav>
  );
}
