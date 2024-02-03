// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
import translationEN from "././translations/es.json";
import translationES from "././translations/en.json";

// Configura i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: "en", // Establece el idioma predeterminado
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
