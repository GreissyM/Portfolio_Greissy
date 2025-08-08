import { useState } from 'react'
import { Link } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { motion } from "framer-motion"
import './index.css'
import { universityProjects } from './data/universityProjects';
import { personalProjectsArray} from './data/personalProjectsArray.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./components/ContactForm"; // ajusta la ruta si es necesario

import ReactMarkdown from 'react-markdown';

export default function Portfolio() {
  
const [showForm, setShowForm] = useState(false);

const [selectedVideo, setSelectedVideo] = useState(null);

const [isModalOpen, setIsModalOpen] = useState(false);

const hoverSound = [
  new Audio("audio/hoverSounds/UI_Sounds_Portfolio-001.mp3"),
  new Audio("audio/hoverSounds/UI_Sounds_Portfolio-002.mp3"),
  new Audio("audio/hoverSounds/UI_Sounds_Portfolio-003.mp3"),
  new Audio("audio/hoverSounds/UI_Sounds_Portfolio-004.mp3"),
];


const openModal = (videoUrl) => {
  setSelectedVideo(videoUrl);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedVideo(null);
};

  const [playing, setPlaying] = useState(null);

  const audioClips = [
  { title: "Experimentación musical", embedURL: "https://api.soundcloud.com/tracks/2149550613%3Fsecret_token%3Ds-mNfZyIDmM6O", category: "Producción Musical"},
    { title: "Ambientación Cinemática", embedURL: "https://api.soundcloud.com/tracks/2149512714%3Fsecret_token%3Ds-pYE0chbuG1y", category: "Cine" },
    { title: "Loop para Videojuegos", embedURL: "https://api.soundcloud.com/tracks/2149551441%3Fsecret_token%3Ds-cuIXV2B4w08", category: "Videojuegos" },
  ];

  const handlePlayPause = (index) => {
    if (playing === index) {
      setPlaying(null);
    } else {
      setPlaying(index);
    }
  };


  const handleMouseEnter = (index) => {
    hoverSound[index].currentTime = 0; // reinicia el sonido si ya se está reproduciendo
    hoverSound[index].play();
  };

  return (
    <div className="root">
      {/* Portada */}
      <section className="video-banner">
        
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline className="video-bg">
              <source src="/CCK_2024.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta video.
          </video>
        </div>

        <div className="banner-text">
          <h1>Diseño Sonoro y Musicalización</h1>
          <p>Transformo ideas en experiencias sonoras inolvidables</p>
          <a href="#especialidades" className="button">Explorar mi trabajo</a>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="section-grid">
        {['Diseño de Sonido', 'Musicalización', 'Producción Musical', 'Publicidad'].map((item, index) => (
          <div key={index} className="card"
          onMouseEnter={() => handleMouseEnter(index)}
          >
            <h2>{item}</h2>
          </div>
        ))}
      </section>

      {/* Proyectos Destacados */}
      <section id="personal-Projects" className="section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="project-grid">
          {personalProjectsArray
          .filter(projects => [1, 2, 3].includes(projects.id)) // <- Elije los IDs deseados
          .map((projects) => (
            <motion.div
              key={projects.id}
              whileHover={{ scale: 1.05 }}
              className="project-card"
              onClick={() => openModal(projects.videoUrl)}
            >
              <img src={`/proyecto-${projects.id}.png`} alt={`Proyecto ${projects.title}`} className="project-image" />
              <h3 className='asignatura'>{projects.title}</h3>
              <div className='description'><ReactMarkdown>{projects.description}</ReactMarkdown></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galería de audio interactiva */}
      <section className="section-alt">
        <h2 className="section-title">Galería de Audio</h2>
        <div className="audio-grid">
          {audioClips.map((clip, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="audio-card"
            >
              <h3>{clip.title}</h3>
              <p>Categoría: {clip.category}</p>
              <button className="button" onClick={() => handlePlayPause(index)}>
                {playing === index ? "Detener" : "Reproducir"}
              </button>
              {/* {playing === index && (
                <audio src={clip.src} autoPlay onEnded={() => setPlaying(null)} controls />
              )} */}
            </motion.div>
          ))}
        </div>

         {/* Reproductor flotante */}
          {playing !== null && (
            <div className="audio-player-overlay">
              <button className="close-button" onClick={() => setPlaying(null)}>✕</button>
              {/* <audio
                src={audioClips[playing].src}
                autoPlay
                onEnded={() => setPlaying(null)}
                controls
              /> */}

              <iframe width="40%" height="70" scrolling="no" frameborder="no" allow="autoplay" 
              // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2149512714%3Fsecret_token%3Ds-pYE0chbuG1y&color=%2384a4ec&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(audioClips[playing].embedURL)}&color=%2384a4ec&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
                </iframe>

              <span>{audioClips[playing].title}</span>
            </div>
          )}
      </section>

      {/* Sobre mí */}
      <section className="section-alt">
        <h2 className="section-title">Sobre mí</h2>
        <p className="about-text">
          Greissy es una diseñadora sonora y músico especializada en transformar ideas en piezas 
          sonoras para cine, videojuegos y publicidad. Su musicalidad y creación de experiencias 
          sonoras inmersivas se caracterizan por su personalidad y engagement. Con formación en 
          creación sonora y técnicas en sonido y grabación, logra una mirada sensible e interdisciplinaria 
          combinando arte, tecnología y narrativa para construir paisajes sonoros memorables. Su trabajo se 
          enfoca en el diseño sonoro para videojuegos, entornos interactivos (UX/UI) y cine, con un enfoque 
          estético que equilibra emoción, funcionalidad y profundidad narrativa. Maneja herramientas digitales 
          acordes con la disciplina como los DAW Reaper y Ableton Live, e incurre más allá dominando herramientas 
          visuales como Premiere, After Effect, Krita, entre otros. Su formación musical inició a temprana edad, 
          permitiéndole experimentar con distintos instrumentos y profesionalizarse en el piano y la mandolina, 
          desempeñándose como ejecutante en agrupaciones y orquestas. Actualmente participa como técnico de sonido 
          en la orquesta especializada en música de videojuegos <i>Corear</i>.
        </p>
        <div className="section"><h3 className="about-text">Formación profesional: Técnico en Sonido y Grabación</h3>
        <a href='/Diseñadora Sonora_2025.pdf' target='_blank'><h3 className="about-text">CV</h3></a>
        </div>

      </section>
      
      {/* Portfolio Universitario */}
      <section id="university-projects" className="UniversityPortfolio">
        <h2 className="section-title">Portfolio Universitario</h2>
        <div className="project-grid">
          {universityProjects
          .filter(projectU => [1, 23, 17].includes(projectU.id)) // <- Elije los IDs deseados
          .map((projectU) => (
            <motion.div
              key={projectU.id}
              whileHover={{ scale: 1.05 }}
              className="project-card"
              onClick={() => openModal(projectU.videoUrl)}
            >
              {/* Carrusel de imágenes */}
              <Slider dots={false} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={3000} arrows={false}>
                {projectU.image.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Imagen ${idx + 1} de ${projectU.title}`} className="project-image" />
                </div>
                ))}
              </Slider>
              {/* <img src={projectU.image} alt={`Proyecto ${projectU.title}`} className="project-image" /> */}
              <h3>Proyecto {projectU.id}: "{projectU.title}"</h3>
              <h4 className='asignatura'>Asignatura: {projectU.asignature}</h4>
              <div className='description'><ReactMarkdown>{projectU.description}</ReactMarkdown></div>
              {/* <p className='description'>{projectU.description}</p> */}
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

        <section className="section">
        <div className="contact-text">
        <Link to="/proyectos-universitarios" className='button'onClick={() => window.scrollTo(0, 0)}>...más proyectos...</Link>
        {/* <button className="button">...más proyectos...</button> */}
        </div>
        </section>

      </section>

      {/* Contacto */}
      <section className="section">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-text">
          <p>¿Tienes un proyecto? ¡Hablemos!😄:</p>
          <button className="button" onClick={() => setShowForm(true)}>Contáctame</button>
        </div>

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}

      </section>

      <footer>
        <div className="section-foot">
          <a href="http://www.linkedin.com/in/melissa-ochoa" target="_blank" rel="noopener noreferrer" className="card-foot"><img src="/iconos Social Media/linkedin-socials-social-media-icon.png" alt="linkedin" /></a>
          <a href="https://www.instagram.com/portfolio_ochoa/" target="_blank" rel="noopener noreferrer" className="card-foot"><img src="/iconos Social Media/instagram-socials-social-media-icon.png" alt="insta" /></a>
        </div>
      </footer>

    </div>
  );
}
