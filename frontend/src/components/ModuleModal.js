import React, { useState, useEffect } from 'react';

export default function ModuleModal({ isOpen, onClose, onSave, module }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (module) setTitle(module.title);
    else setTitle('');
  }, [module]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title) return alert('Digite o título do módulo');
    onSave({ id: module?.id || Date.now(), title, lessons: module?.lessons || [] });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl mb-4">{module ? 'Editar' : 'Novo'} Módulo</h2>
        <input
          type="text"
          placeholder="Título do módulo"
          className="w-full mb-4 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancelar
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
