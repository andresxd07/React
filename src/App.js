// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Curso from './components/Curso';

const cursos = [
  {
    nombre: 'Curso de Desarrollo Web',
    descripcion: 'Aprende a construir sitios web modernos',
  },
  {
    nombre: 'Curso de Programación en JavaScript',
    descripcion: 'Domina JavaScript y sus frameworks',
  },
  {
    nombre: 'Curso de Diseño de Interfaces de Usuario',
    descripcion: 'Crea interfaces de usuario atractivas y usables',
  },
  {
    nombre: 'Curso de Bases de Datos',
    descripcion: 'Aprende a trabajar con bases de datos relacionales',
  },
  {
    nombre: 'Curso de Desarrollo de Aplicaciones Móviles',
    descripcion: 'Construye aplicaciones móviles para iOS y Android',
  },
  {
    nombre: 'Curso de Machine Learning',
    descripcion: 'Explora el mundo del aprendizaje automático',
  },
  {
    nombre: 'Curso de Marketing Digital',
    descripcion: 'Domina las estrategias de marketing en línea',
  },
  {
    nombre: 'Curso de Redes de Computadoras',
    descripcion: 'Comprende las redes y la conectividad',
  },
  {
    nombre: 'Curso de Seguridad Informática',
    descripcion: 'Protege la información y sistemas digitales',
  },
  {
    nombre: 'Curso de Inteligencia Artificial',
    descripcion: 'Sumérgete en la inteligencia artificial y el aprendizaje profundo',
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Cursos Online</h1>
      <div className="curso-list">
        {cursos.map((curso, index) => (
          <Curso
            key={index}
            nombre={curso.nombre}
            descripcion={curso.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
