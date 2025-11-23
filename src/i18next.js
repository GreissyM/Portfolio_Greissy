// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // detecta el idioma del navegador / localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // orden de detección: primero localStorage, luego navegador, luego path
      order: ['localStorage', 'navigator', 'path', 'htmlTag'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0, // si usás /en/..., lo lee del path
    },
  });

export default i18n;
