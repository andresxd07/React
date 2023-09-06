// src/components/CursoModal.js
import React from 'react';
import './CursoModal.css'; // Agrega un archivo de estilos para CursoModal

function CursoModal({ nombre, descripcion, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">{nombre}</h2>
        <p>{descripcion}</p>
        <button className="modal-button" onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default CursoModal;
