import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

const i18nConfig = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'el'],
  defaultNS: 'translation',
  fallbackNS: 'translation',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  },
  cache: {
    enabled: false
  }
};

i18n
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n; 