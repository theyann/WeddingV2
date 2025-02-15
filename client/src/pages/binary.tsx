import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Section } from "@/components/Section";
import { MapLink } from "@/components/MapLink";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BinaryPage() {
  const { t, i18n } = useTranslation();
  const guestType = "b";

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
        <Section title="Welcome" delay={0.3}>
          <p className="text-gray-700">{t('welcome.message')}</p>
        </Section>

        <Section title={t('rsvp.title')} delay={0.4}>
          <p className="mb-4">{t('rsvp.message')}</p>
          <p className="mb-4 text-pink-600">{t('rsvp.deadline')}</p>
          <Button
            className="w-full"
            onClick={() => rsvpLink && window.open(rsvpLink, '_blank')}
          >
            {t('rsvp.link.label')}
          </Button>
        </Section>

        <Section title={t('program.title')} delay={0.5}>
          <pre className="whitespace-pre-wrap">
            {programMessage}
          </pre>
        </Section>

        <Section title={t('ceremony.title')} delay={0.6}>
          <p className="mb-4">{t('ceremony.message')}</p>
          <MapLink address={t('ceremony.address')} />
        </Section>

        <Section title={t('festivities.title')} delay={0.7}>
          <p className="mb-4">{t('festivities.message')}</p>
          <MapLink address={t('festivities.address')} />
        </Section>

        <Section title={t('gift.title')} delay={0.8}>
          <p className="mb-4">{t('gift.message')}</p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(t('gift.link.url')[i18n.language], '_blank')}
          >
            {t('gift.link.label')}
          </Button>
        </Section>

        <Section title={t('faq.title')} delay={0.9}>
          <div className="space-y-6">
            {(t('faq.qanda', { returnObjects: true }) as any[]).map((qa: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold mb-2">{qa.q[i18n.language]}</h3>
                <p className="text-gray-700 mb-2">{qa.a[i18n.language]}</p>
                {qa.link && (
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => window.open(qa.link.url[i18n.language], '_blank')}
                  >
                    {qa.link.label[i18n.language]}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title={t('contact.title')} delay={1}>
          <p className="mb-4">{t('contact.message')}</p>
          <p>Email: {t('contact.email')}</p>
          <p>Yann: {t('contact.phone.0.number')}</p>
          <p>Julie: {t('contact.phone.1.number')}</p>
        </Section>
      </div>
    </div>
  );
}