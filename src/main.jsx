import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18next.js"; // inicializa i18n
import { I18nextProvider } from "react-i18next";
import './index.css';
import Portfolio from './App.jsx';
import AllUProjects from './Pages/all_UProjects.jsx';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Portfolio />
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/proyectos-universitarios" element={<AllUProjects />} />
      </Routes>
    </Router>
    </I18nextProvider>
  </React.StrictMode>
);