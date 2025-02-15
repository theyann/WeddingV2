import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../../../attached_assets/i18n.json';

type TranslationResources = {
  translation: Record<string, any>;
};

const resources: { en: TranslationResources; fr: TranslationResources } = {
  en: {
    translation: {}
  },
  fr: {
    translation: {}
  }
};

// Transform the translations into i18next format
translations.forEach((section) => {
  const sectionName = section.section;

  Object.entries(section).forEach(([key, value]) => {
    if (key === 'section') return;

    if (typeof value === 'string') {
      // Handle direct string values
      resources.en.translation[`${sectionName}.${key}`] = value;
      resources.fr.translation[`${sectionName}.${key}`] = value;
    } else if (value && typeof value === 'object') {
      if ('en' in value && 'fr' in value) {
        // Handle direct translations
        resources.en.translation[`${sectionName}.${key}`] = value.en;
        resources.fr.translation[`${sectionName}.${key}`] = value.fr;
      } else if (Array.isArray(value)) {
        if (key === 'message:') {
          // Fix the typo in the key name for program messages
          resources.en.translation[`${sectionName}.message`] = value;
          resources.fr.translation[`${sectionName}.message`] = value;
        } else {
          // Handle arrays (like phone numbers)
          resources.en.translation[`${sectionName}.${key}`] = value;
          resources.fr.translation[`${sectionName}.${key}`] = value;
        }
      } else {
        // Handle nested objects
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          const fullKey = `${sectionName}.${key}.${nestedKey}`;
          if (nestedValue && typeof nestedValue === 'object') {
            if ('en' in nestedValue && 'fr' in nestedValue) {
              resources.en.translation[fullKey] = nestedValue.en;
              resources.fr.translation[fullKey] = nestedValue.fr;
            } else {
              resources.en.translation[fullKey] = nestedValue;
              resources.fr.translation[fullKey] = nestedValue;
            }
          } else {
            resources.en.translation[fullKey] = nestedValue;
            resources.fr.translation[fullKey] = nestedValue;
          }
        });
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
    returnObjects: true
  });

export default i18next;