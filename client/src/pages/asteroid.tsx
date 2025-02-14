import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Section } from "@/components/Section";
import { MapLink } from "@/components/MapLink";
import { Button } from "@/components/ui/button";

export default function AsteroidPage() {
  const { t, i18n } = useTranslation();
  const guestType = "a";

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <CountdownTimer />

      <h1 className="text-4xl md:text-6xl text-center gradient-text my-8">
        {t('mainTitle.title')}
      </h1>

      <div className="space-y-8">
        <Section title={t('welcome.title')}>
          <p className="text-gray-700">{t('welcome.message')}</p>
        </Section>

        <Section title={t('rsvp.title')}>
          <p className="mb-4">{t('rsvp.message')}</p>
          <p className="mb-4 text-pink-600">{t('rsvp.deadline')}</p>
          <Button
            className="w-full"
            onClick={() => window.open(t(`rsvp.link.url.0.${i18n.language}`), '_blank')}
          >
            {t('rsvp.link.label')}
          </Button>
        </Section>

        <Section title={t('program.title')}>
          <pre className="whitespace-pre-wrap">
            {t(`program.message.0.${i18n.language}`)}
          </pre>
        </Section>

        <Section title={t('ceremony.title')}>
          <p className="mb-4">{t('ceremony.message')}</p>
          <MapLink address={t('ceremony.address')} />
        </Section>

        <Section title={t('gift.title')}>
          <p className="mb-4">{t('gift.message')}</p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(t(`gift.link.url.${i18n.language}`), '_blank')}
          >
            {t('gift.link.label')}
          </Button>
        </Section>

        <Section title={t('contact.title')}>
          <p className="mb-4">{t('contact.message')}</p>
          <p>Email: {t('contact.email')}</p>
          <p>Yann: {t('contact.phone[0].number')}</p>
          <p>Julie: {t('contact.phone[1].number')}</p>
        </Section>
      </div>
    </div>
  );
}