// src/components/Curso.js
import React, { useState } from 'react';
import CursoModal from './CursoModal';
import './Curso.css'; // Agrega un archivo de estilos para Curso

function Curso({ nombre, descripcion }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="curso">
      <h2 className="curso-title">{nombre}</h2>
      <button className="curso-button" onClick={openModal}>Ver Detalles</button>
      {modalOpen && <CursoModal nombre={nombre} descripcion={descripcion} closeModal={closeModal} />}
    </div>
  );
}

export default Curso;
