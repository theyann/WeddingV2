import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../../../attached_assets/i18n.json';

const resources = {
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

    if (typeof value === 'object' && value !== null) {
      // Handle direct translations (en/fr objects)
      if ('en' in value && 'fr' in value) {
        resources.en.translation[`${sectionName}.${key}`] = value.en;
        resources.fr.translation[`${sectionName}.${key}`] = value.fr;
      }
      // Handle arrays with nested translations
      else if (Array.isArray(value)) {
        if (key === 'message:') { // Handle program messages
          resources.en.translation[`${sectionName}.message`] = value;
          resources.fr.translation[`${sectionName}.message`] = value;
        } else { // Handle other arrays
          resources.en.translation[`${sectionName}.${key}`] = value;
          resources.fr.translation[`${sectionName}.${key}`] = value;
        }
      }
      // Handle nested objects (like links)
      else {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          if (typeof nestedValue === 'object' && nestedValue !== null) {
            if ('en' in nestedValue && 'fr' in nestedValue) {
              resources.en.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue.en;
              resources.fr.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue.fr;
            } else {
              resources.en.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue;
              resources.fr.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue;
            }
          } else {
            resources.en.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue;
            resources.fr.translation[`${sectionName}.${key}.${nestedKey}`] = nestedValue;
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