// Especialidades.jsx //hoverSounds
import React from "react";

const hoverSound = new Audio("/sounds/hover-sound.mp3");

const Especialidades = () => {
  const handleMouseEnter = () => {
    hoverSound.currentTime = 0; // reinicia el sonido si ya se está reproduciendo
    hoverSound.play();
  };

  return (
    <section id="especialidades" className="section-grid">
      {['Diseño de Sonido', 'Musicalización', 'Producción Musical', 'Publicidad'].map((item, index) => (
        <div
          key={index}
          className="card"
          onMouseEnter={handleMouseEnter}
        >
          <h2>{item}</h2>
        </div>
      ))}
    </section>
  );
};

export default Especialidades;
