import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEng from "./locales/en/translation.json";
import translationRus from "./locales/ru/translation.json";
import translationPol from "./locales/pl/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: translationEng,
    },
    ru: {
      translations: translationRus,
    },
    pl: {
      translations: translationPol,
    },
  },

  initImmediate: false,
  fallbackLng: "en",
  lng: "en",
  preload: ["en", "ru", "pl"],

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
    bindI18n: "languageChanged",
  },
});

export default i18n;
