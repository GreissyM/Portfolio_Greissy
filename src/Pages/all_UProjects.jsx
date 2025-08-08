// src/pages/all_UProjects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {universityProjects} from '../data/universityProjects.jsx'; // asegúrate de tener los datos
import "../index.css";
import ReactMarkdown from 'react-markdown';

  
const AllUProjects = () => {

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
      <h2 className="section-title">Galería de Proyectos Universitarios</h2>
      <div className="project-grid-extended">
        {universityProjects.map((projectU) => (
          <motion.div
            key={projectU.id}
            whileHover={{ scale: 1.05 }}
            className="project-card"
            onClick={() => openModal(projectU.videoUrl)}
          >
            {Array.isArray(projectU.image) && projectU.image.length > 0 ? (
            <Slider {...settings}>
              {projectU.image.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Imagen ${idx + 1} de ${projectU.title}`}
                    className="project-image"
                  />
                </div>
              ))}
            </Slider>
            ) : (
            <img src={projectU.image} alt={projectU.title} className="project-image" />
            )}
            <h3>Proyecto {projectU.id}: "{projectU.title}"</h3>
            <h4 className='asignatura'>Asignatura: {projectU.asignature}</h4>
            <div className='description'><ReactMarkdown>{projectU.description}</ReactMarkdown></div>
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
