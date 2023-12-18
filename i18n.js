import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'home', 'menu', 'controls-form'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [
        resourcesToBackend((lng, ns) => import(`./public/locales/${lng}/${ns}.json`))
      ]
    }
  });
export default i18n;