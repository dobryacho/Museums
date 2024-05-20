import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationEN from "./server/public/locals/en/translation.json";
import translationRU from "./server/public/locals/ru/translation.json";
import translationDE from "./server/public/locals/de/translation.json";


const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(HttpApi) // используем для загрузки переводов
  .use(LanguageDetector) // используем для определения языка
  .use(initReactI18next) // инициализация react-i18next
  .init({
    resources,
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false, // для react не нужно экранировать
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // путь к файлам переводов
    },
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;
