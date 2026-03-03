import ReactMarkdown from 'react-markdown';
import { useTranslation } from "react-i18next";
import descriptions from './uDescriptions.json';

export const personalProjectsArray = [
  {
    id: 1,
    title: "PP.title1",
    asignature: "Taller de creación sonora VI",
    description: "PP.descrip1",
    // `Ejercicio de film scoring dentro del contexto de taller de creación sonora. Su elaboración consistió en realizar un análisis de funciones identificando los hit points que permitieran resaltar la narrativa audiovisual.
    // \n\n_**Se recomienda usar auriculares**_`,
    year: "2024",
    videoUrl: "https://www.youtube.com/embed/8_SARDGTWiY?si=qRH4S210_zNoqrOb",
    image: [
      "/nuncaOlvides/projectU-1.png",
      "/nuncaOlvides/projectU-2.png",
    ],
  },
  // {
  //   id: 2,
  //   title: "PP.title2",
  //   asignature: "Orquesta Corear",
  //   description: "PP.descrip2",
  //   // `Mezcla Inmersiva.
  //   // \n\n_**Se recomienda usar auriculares**_`,
  //   year: "2023",
  //   videoUrl: "https://www.youtube.com/embed/nTNeWqWAPss?si=-HYSleQzvd1wGD6k",
  //   image: [
  //     "/pagConstr.png",
  //     "/pagConstr.png",
  //   ],
  // },
    {
    id: 2,
    title: "PP.title2",
    asignature: "Taller de Creación Sonora V",
    description: "UP.TCS5",
    // `Mezcla Inmersiva.
    // \n\n_**Se recomienda usar auriculares**_`,
    year: "2025",
    videoUrl: "https://www.youtube.com/embed/QE1mvikSfno?si=I2c3H7eOgDOdHPc_",
    image: [
      "/elSilbon/Sil-1.png",
      "/elSilbon/Sil-2.png",
      "/elSilbon/Sil-3.png",
    ],
  },
  {
    id: 3,
    title: "PP.title3",
    asignature: "Diseño e imagen de marca",
    description: "PP.descrip3",
    // `Logo sonoro y animación para el club social de ajedrez _Torre Blanca_.`,
    year: "2025",
    videoUrl: "https://www.youtube.com/embed/6EUd-GCWiLA?si=aV8tF3uXhY7ZXm0n&amp;controls=0",
    image: [
      "/pagConstr.png",
      "/pagConstr.png",
    ],
  },
];
