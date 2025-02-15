import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Section } from "@/components/Section";
import { MapLink } from "@/components/MapLink";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function AsteroidPage() {
  const { t, i18n } = useTranslation();
  const guestType = "a";

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
        className="text-4xl md:text-6xl text-center gradient-text my-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('mainTitle.title')}
      </motion.h1>

      <div className="space-y-8">
        <Section title="Welcome">
          <p className="text-gray-700">{t('welcome.message')}</p>
        </Section>

        <Section title={t('rsvp.title')}>
          <p className="mb-4">{t('rsvp.message')}</p>
          <p className="mb-4 text-pink-600">{t('rsvp.deadline')}</p>
          <Button
            className="w-full"
            onClick={() => rsvpLink && window.open(rsvpLink, '_blank')}
          >
            {t('rsvp.link.label')}
          </Button>
        </Section>

        <Section title={t('program.title')}>
          <pre className="whitespace-pre-wrap">
            {programMessage}
          </pre>
        </Section>

        <Section title={t('ceremony.title')}>
          <p className="mb-4">{t('ceremony.message')}</p>
          <MapLink address={t('ceremony.address')} />
        </Section>

        <Section title={t('drink.title')}>
          <p className="mb-4">{t('drink.message')}</p>
          <MapLink address={t('drink.address')} />
        </Section>

        <Section title={t('gift.title')}>
          <p className="mb-4">{t('gift.message')}</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="w-full gradient-border bg-white hover:bg-white/90 transition-all duration-300"
              onClick={() => window.open(t('gift.link.url')[i18n.language], '_blank')}
            >
              <span className="gradient-text">{t('gift.link.label')}</span>
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
          <p>Email: {t('contact.email')}</p>
          <p>Yann: {t('contact.phone.0.number')}</p>
          <p>Julie: {t('contact.phone.1.number')}</p>
        </Section>
      </div>
    </div>
  );
}