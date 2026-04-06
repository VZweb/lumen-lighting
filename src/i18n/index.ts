import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import gr from "./gr.json";

const savedLang = localStorage.getItem("lumen-lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    gr: { translation: gr },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lumen-lang", lng);
  document.documentElement.lang = lng;
});

export default i18n;
