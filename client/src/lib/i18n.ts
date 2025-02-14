import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../../../attached_assets/i18n.json';

const resources = {
  en: {},
  fr: {}
};

// Transform the translations into i18next format
translations.forEach(section => {
  Object.keys(section).forEach(key => {
    if (typeof section[key] === 'object' && (section[key].en || section[key].fr)) {
      resources.en[section.section] = {
        ...resources.en[section.section],
        [key]: section[key].en
      };
      resources.fr[section.section] = {
        ...resources.fr[section.section],
        [key]: section[key].fr
      };
    }
  });
});

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
