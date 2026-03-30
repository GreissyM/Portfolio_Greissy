import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { motion } from "framer-motion";
import './index.css';
import { universityProjects } from './data/universityProjects.jsx';
import { personalProjectsArray } from './data/personalProjectsArray.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "./components/ContactForm.jsx"; // ajusta la ruta si es necesario

import ReactMarkdown from 'react-markdown';

export default function Portfolio() {

  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

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
    { title: t("AC.titleS1"), embedURL: "https://api.soundcloud.com/tracks/2149550613%3Fsecret_token%3Ds-mNfZyIDmM6O", category: t("AC.cat1") },
    { title: t("AC.titleS2"), embedURL: "https://api.soundcloud.com/tracks/2149512714%3Fsecret_token%3Ds-pYE0chbuG1y", category: t("AC.cat2") },
    { title: t("AC.titleS3"), embedURL: "https://api.soundcloud.com/tracks/2149551441%3Fsecret_token%3Ds-cuIXV2B4w08", category: t("AC.cat3") },
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
      {/* Selector de idioma */}
      <div className="idiomas">
        <button onClick={() => changeLang("es")}>ES</button>
        <button onClick={() => changeLang("en")}>EN</button>
        {/* Ejemplo de textos traducidos <h1>{t("App.title")}</h1> <p>{t("App.subtitle")}</p> */}
      </div>

      {/* Portada */}
      <section className="video-banner">

        <div className="video-wrapper">
          {/* <video autoPlay muted loop playsInline className="video-bg">
            <source src="/CCK_2024.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta video.
          </video> */}
          <img src="/Foto_Meli2.png" alt="" className="video-bg"/>
        </div>

        <div className="banner-text">
          <h1>{t("App.title")}</h1>
          <p>{t("App.subtitle")}</p>
          <a href="#personal-Projects" className="button">{t("App.button_1")}</a>
        </div>
      </section>

      {/* Especialidades */}
      {/* <section id="especialidades" className="section-grid">
        {[t("App.spec1"), t("App.spec2"), t("App.spec3"), t("App.spec4")].map((item, index) => (
          <div key={index} className="card"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <h2>{item}</h2>
          </div>
        ))}
      </section> */}

      {/* Proyectos Destacados */}
      <section id="personal-Projects" className="section">
        <h2 className="section-title">{t("App.title2")}</h2>
        <div className="project-grid">
          {personalProjectsArray
            .filter(projects => [1, 2, 3].includes(projects.id)) // <- Elije los IDs deseados
            .map((projects, index) => (
              <motion.div
                // onMouseEnter={() => handleMouseEnter(index)}
                key={projects.id}
                whileHover={{ scale: 1.05 }}
                className="project-card"
                onClick={() => openModal(projects.videoUrl)}
              >
                <img src={`/proyecto-${projects.id}.png`} alt={`Proyecto ${projects.title}`} className="project-image" />
                <h3 className='asignatura'>{t(projects.title)}</h3>
                <div className='description'><ReactMarkdown>{t(projects.description)}</ReactMarkdown></div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Galería de audio interactiva */}
      <section className="section-alt">
        <h2 className="section-title">{t("App.title3")}</h2>
        <div className="audio-grid">
          {audioClips.map((clip, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="audio-card"
            >
              <h3>{clip.title}</h3>
              <p>{t("App.subtitle2")}{clip.category}</p>
              <button className="button" onClick={() => handlePlayPause(index)}>
                {playing === index ? t("App.stopButton") : t("App.playButton")}
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

            <iframe width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay"
              // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2149512714%3Fsecret_token%3Ds-pYE0chbuG1y&color=%2384a4ec&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(audioClips[playing].embedURL)}&color=%2384a4ec&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
            </iframe>

            <span>{audioClips[playing].title}</span>
          </div>
        )}
      </section>

      {/* Sobre mí */}
      <section className="section-alt">
        <h2 className="section-title">{t("App.title4")}</h2>
        <p className="about-text">{t("App.aboutMe")}
          {/* Greissy es una diseñadora sonora y músico especializada en transformar ideas en piezas
          sonoras para cine, videojuegos y publicidad. Su musicalidad y creación de experiencias
          sonoras inmersivas se caracterizan por su personalidad y engagement. Con formación en
          creación sonora y técnicas en sonido y grabación, logra una mirada sensible e interdisciplinaria
          combinando arte, tecnología y narrativa para construir paisajes sonoros memorables. Su trabajo se
          enfoca en el diseño sonoro para videojuegos, entornos interactivos y cine, con un enfoque
          estético que equilibra emoción, funcionalidad y profundidad narrativa. Maneja herramientas digitales
          acordes con la disciplina enfocada principalmente en Reaper, e incurre más allá dominando herramientas
          visuales como Premiere, After Effect, Krita, entre otros. Su formación musical inició a temprana edad,
          permitiéndole experimentar con distintos instrumentos y profesionalizarse en el piano y la mandolina,
          desempeñándose como ejecutante en agrupaciones y orquestas. Actualmente participa como técnico de sonido
          y grabación en una orquesta dedicada a música para videojuegos. */}
        </p>
        <div className="section"><h3 className="about-text">{t("App.formacion")}</h3>
          <h3 className="about-text">CV</h3>
          <div className="about-text">
          <a href='./CV/GreissyOchoa_ES2026.pdf' target='_blank'>
            <img src="./CV/ATS.png" alt="ATS" width="200" height="150" />
          </a>
          {/* <a href='./CV/CV_EN-2025.pdf' target='_blank'>
            <img src="./CV/CV.png" alt="CV" width="200" height="150" />
          </a> */}
          </div>
        </div>

      </section>

      {/* Portfolio Universitario */}
      <section id="university-projects" className="section">
        <h2 className="section-title">{t("App.tittle5")}</h2>
        <div className="project-grid">
          {universityProjects
            .filter(projectU => [1, 2, 3].includes(projectU.id)) // <- Elije los IDs deseados
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
                <h3>{t("App.subtitle3")}{projectU.id}: "{projectU.title}"</h3>
                <h4 className='asignatura'>{t("App.subtitle4")}{projectU.asignature}</h4>
                <div key={i18n.language} className='description'><ReactMarkdown>{t(projectU.description)}</ReactMarkdown></div>
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
            <Link to="/proyectos-universitarios" className='button' onClick={() => window.scrollTo(0, 0)}>{t("App.projectButton")}</Link>
            {/* <button className="button">...más proyectos...</button> */}
          </div>
        </section>

      </section>

      {/* Contacto */}
      <section className="section">
        {/* <h2 className="section-title">{t("App.title6")}</h2> */}
        <div className="contact-text">
          <p>{t("App.mensaje")}</p>
          <button className="button" onClick={() => setShowForm(true)}>{t("App.button2")}</button>
        </div>

        {showForm && <ContactForm onClose={() => setShowForm(false)} />}

      </section>

      <footer>
        <div className="section-foot">
          <a href="http://www.linkedin.com/in/melissa-ochoa" target="_blank" rel="noopener noreferrer" className="card-foot"><img src="/iconos Social Media/linkedin-socials-social-media-icon.png" alt="linkedin" /></a>
          <div><p className="contact-text">{t("App.footerText")}</p></div>
          <a href="https://www.instagram.com/portfolio_ochoa/" target="_blank" rel="noopener noreferrer" className="card-foot"><img src="/iconos Social Media/instagram-socials-social-media-icon.png" alt="insta" /></a>
        </div>
      </footer>

    </div>
  );
}
