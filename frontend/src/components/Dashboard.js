import React from 'react';
import Courses from './Courses';

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Painel do Aluno</h1>
      <Courses />
    </div>
  );
}
