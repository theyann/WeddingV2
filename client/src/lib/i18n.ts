import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../../../attached_assets/i18n.json';

type TranslationSection = {
  section: string;
  [key: string]: any;
};

const resources = {
  en: {} as Record<string, Record<string, any>>,
  fr: {} as Record<string, Record<string, any>>
};

// Transform the translations into i18next format
translations.forEach((section: TranslationSection) => {
  // Initialize the section if it doesn't exist
  if (!resources.en[section.section]) {
    resources.en[section.section] = {};
    resources.fr[section.section] = {};
  }

  Object.entries(section).forEach(([key, value]) => {
    if (key !== 'section' && typeof value === 'object' && value !== null) {
      if ('fr' in value || 'en' in value) {
        resources.en[section.section][key] = value.en;
        resources.fr[section.section][key] = value.fr;
      } else if (Array.isArray(value)) {
        // Handle arrays (like FAQ questions or program messages)
        resources.en[section.section][key] = value;
        resources.fr[section.section][key] = value;
      }
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
    },
    returnObjects: true // Enable returning objects for array translations
  });

export default i18next;