import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Section } from "@/components/Section";
import { MapLink } from "@/components/MapLink";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactInfo } from "@/components/ContactInfo"; // Assuming this component exists

export default function CometPage() {
  const { t, i18n } = useTranslation();
  const guestType = "c";

  const programMessage = (t('program.message', { returnObjects: true }) as any[])
    ?.find(m => m.guestType === guestType)?.[i18n.language] || '';

  const rsvpLinks = t('rsvp.link.url', { returnObjects: true }) as any[];
  const rsvpLink = rsvpLinks?.find(l => l.guestType === guestType)?.[i18n.language];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CountdownTimer />
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-6xl text-center gradient-text my-8 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('mainTitle.title')}
      </motion.h1>

      <div className="space-y-8">
        <div className="bg-white/80 backdrop-blur rounded-lg p-6">
          <p className="text-gray-700">{t('welcome.message')}</p>
        </div>

        <Section title={t('rsvp.title')}>
          <p className="mb-4">{t('rsvp.message')}</p>
          <div className="my-6 p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
            <p className="text-center font-bold text-pink-600">{t('rsvp.deadline')}</p>
          </div>
          <Button
            className="w-full"
            onClick={() => rsvpLink && window.open(rsvpLink, '_blank')}
          >
            {t('rsvp.link.label')}
          </Button>
        </Section>

        <Section title={t('program.title')}>
          <div className="program-text">
            {programMessage}
          </div>
        </Section>

        <Section title={t('party.title')}>
          <p className="mb-4">{t('party.message')}</p>
          <MapLink address={t('party.address')} />
        </Section>

        <Section title={t('gift.title')}>
          <p className="mb-4">{t('gift.message')}</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="w-full gradient-border bg-pink-600 hover:bg-pink-500 transition-all duration-300"
              onClick={() => window.open(t('gift.link.url'), '_blank')}
            >
              <span className="text-white">{t('gift.link.label')}</span>
            </Button>
          </motion.div>
        </Section>

        <Section title={t('faq.title')}>
          <FAQAccordion
            items={t('faq.qanda', { returnObjects: true }) as any[]}
            language={i18n.language}
          />
        </Section>

        <Section title={t('contact.title')}>
          <p className="mb-4">{t('contact.message')}</p>
          <ContactInfo
            email={t('contact.email')}
            phones={t('contact.phone', { returnObjects: true }) as Array<{ label: string; number: string }>}
          />
        </Section>
      </div>
    </div>
  );
}