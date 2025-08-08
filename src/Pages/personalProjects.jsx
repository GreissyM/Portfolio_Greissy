import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { personalProjects } from './data/personalProjectsArray.jsx'; // asegúrate de tener los datos
import "../index.css";
import ReactMarkdown from 'react-markdown';

  
const PersonalProjects = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="AllProjectsPage">
      <h2 className="section-title">Galería de Proyectos Profesionales</h2>
      <div className="project-grid-extended">
        {personalProjects.map((projects) => (
          <motion.div
            key={projects.id}
            whileHover={{ scale: 1.05 }}
            className="project-card"
            onClick={() => openModal(projects.videoUrl)}
          >
            {Array.isArray(projects.image) && projects.image.length > 0 ? (
            <Slider {...settings}>
              {projects.image.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Imagen ${idx + 1} de ${projects.title}`}
                    className="project-image"
                  />
                </div>
              ))}
            </Slider>
            ) : (
            <img src={projects.image} alt={projects.title} className="project-image" />
            )}
            <h3>Proyecto {projects.id}: "{projects.title}"</h3>
            <h4 className='asignatura'>Asignatura: {projects.asignature}</h4>
            <div className='description'><ReactMarkdown>{projects.description}</ReactMarkdown></div>
          </motion.div>
        ))}
      </div>

              {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">✕</button>
            <iframe
              src={selectedVideo}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Proyecto"
            />
          </div>
        </div>
      )}

      <div className="button-container">
      <Link to="/" className="go-back-button">← Volver a Inicio</Link>
      </div>
    </section>
  );
};

export default AllUProjects;
