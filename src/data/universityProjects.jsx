// src/data/universityProjectsData.js (mejor separar datos de componentes)
import ReactMarkdown from 'react-markdown';
import descriptions from './uDescriptions.json';

export const universityProjects = [
  {
    id: 1,
    title: "Nunca Olvides",
    asignature: "Taller de Creación Sonora I",
    // description: descriptions["1"],
    description:
    `En este proyecto se destaca la elaboración de un diseño sonoro que conecta 
    con un ambiente emocional, acompañado de imágenes acordes a la narrativa a transmitir. 
    Está inspirado en el poema de Mario Benedetti “Hombre preso que mira a su hijo”, del 
    cual se extraen algunos fragmentos acompañados de una banda sonora y efectos sonoros, 
    representando el concepto emocional e histórico a transmitir con capturas tomadas en el 
    Parque De La Memoria y secciones del largometraje La Noche De Los Lápices de Héctor Olivera.
    \n\n**Proyecto grupal - 2022**
    \n_Principales funciones: diseño de sonido, edición y montaje, guion, ejecución como mandolinista, 
    rodaje de las tomas originales, mezcla y masterización._`,
    year: "2022",
    videoUrl: "https://www.youtube.com/embed/xZUo3UF-Yi0",
    image: [
      "/nuncaOlvides/projectU-1.png",
      "/nuncaOlvides/projectU-2.png",
    ],
  },
  // {
  //   id: 2,
  //   title: "...",
  //   asignature: "Música I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "...",
  //   asignature: "Introducción al Discurso Audiovisual",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "...",
  //   asignature: "Introducción a la Investigación",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "...",
  //   asignature: "Taller de Creación Sonora II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "...",
  //   asignature: "Técnica en Sonido y Grabación I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "...",
  //   asignature: "Producción Músical I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "...",
  //   asignature: "Comunicación Oral y Escrita",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "...",
  //   asignature: "Taller de Creación Sonora III",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 10,
  //   title: "...",
  //   asignature: "Música II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 11,
  //   title: "...",
  //   asignature: "Guion Audiovisual I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "...",
  //   asignature: "Taller de Reflexión Artística I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 13,
  //   title: "...",
  //   asignature: "Taller de Creación Sonora IV",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 14,
  //   title: "...",
  //   asignature: "Técnica en Sonido y Grabación II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 15,
  //   title: "...",
  //   asignature: "Managment Artístico I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 16,
  //   title: "...",
  //   asignature: "Comercialización I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  {
    id: 17,
    title: "El Silbón",
    asignature: "Taller de Creación Sonora V",
    description: 
    `Primer acercamiento a la realización, diseño sonoro y musicalización de un videojuego. 
    En este proyecto se explora audio inmersivo para contenido interactivo y de realidad virtual,
    audio no-lineal, música no lineal, desarrollo de espacios virtuales e inmersivos y la espacialización 
    de audio en los entornos virtuales e inmersivos de exploración 3D. Implementando el manejo de herramientas 
    como Unity y Wwise. Se inspira en una leyenda venezolana conocida como el silbón, dentro del género terror.\n\n
    \n\n**Proyecto individual - 2024**`,
    year: "2025",
    videoUrl: "https://www.youtube.com/embed/QE1mvikSfno?si=I2c3H7eOgDOdHPc_",
    image: [
      "/elSilbon/Sil-1.png",
      "/elSilbon/Sil-2.png",
      "/elSilbon/Sil-3.png",
    ],
  },
  {
    id: 18,
    title: "...",
    asignature: "...", //Música III
    description: "...Próximamente...",
    year: "2023",
    videoUrl: "https://www.youtube.com/embed/...",
    image: [
      "/pagConstr.png",
      "/pagConstr.png",
    ],
  },
  // {
  //   id: 19,
  //   title: "...",
  //   asignature: "Montaje y Edición I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 20,
  //   title: "...",
  //   asignature: "Diseño e Imagen de Marcas",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 21,
  //   title: "...",
  //   asignature: "Taller de Creación Sonora VI",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 22,
  //   title: "...",
  //   asignature: "Música IV",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  {
    id: 23,
    title: "Viajeros del Submarino",
    asignature: "Producción Musical II",
    description: 
    `En el presente se abordaron recursos, herramientas y habilidades para la realización de un evento musical 
    online bajo tres ejes principales: Britpop, Surrealismo y Solidaridad. Inspirado en el disco Yellow Submarine 
    de la agrupación Los Beatles, se busca conectar la música con el arte surrealista. El evento se enmarcó como 
    centro de recaudación y apoyo a la  Fundación Brincar, quienes brindan un espacio de orientación para las 
    personas dentro del espectro autista.
    \n\n**Proyecto grupal - 2023**
    \n\n_Principales funciones: productora, coordinadora, guionista, fotógrafa, editora, co-directora de arte y 
    directora general._`,
    year: "2023",
    videoUrl: "https://www.youtube.com/embed/hL6A8o8mKPI?si=t82wqCYG8kGCLSYE",
    image: [
      "/viajerosSubmarino/VS-1.png",
      "/viajerosSubmarino/VS-2.png",
      "/viajerosSubmarino/VS-3.png",
      "/viajerosSubmarino/VS-4.png",
      "/viajerosSubmarino/VS-5.png",
      "/viajerosSubmarino/VS-6.png",
      "/viajerosSubmarino/VS-7.png",
    ],
  },
  // {
  //   id: 24,
  //   title: "...",
  //   asignature: "Taller de Agencia I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 25,
  //   title: "...",
  //   asignature: "Proyecto Multimedial I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 26,
  //   title: "...",
  //   asignature: "...", //Animación I
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 27,
  //   title: "...",
  //   asignature: "Medios Digitales II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 28,
  //   title: "...",
  //   asignature: "Producción Digital I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 29,
  //   title: "...",
  //   asignature: "Proyecto Multimedial II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 30,
  //   title: "...",
  //   asignature: "Animación II",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 31,
  //   title: "...",
  //   asignature: "Medios Digitales I",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
  // {
  //   id: 32,
  //   title: "...",
  //   asignature: "Proyecto de Grado",
  //   description: "...Próximamente...",
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/...",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
];
