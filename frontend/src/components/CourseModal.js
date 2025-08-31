import React, { useState, useEffect } from 'react';

export default function CourseModal({ isOpen, onClose, onSave, course }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [course]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title) return alert('Digite o título do curso');
    onSave({ id: course?.id || Date.now(), title, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl mb-4">{course ? 'Editar' : 'Novo'} Curso</h2>
        <input
          type="text"
          placeholder="Título"
          className="w-full mb-2 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          className="w-full mb-4 p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
