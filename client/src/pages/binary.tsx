import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Section } from "@/components/Section";
import { MapLink } from "@/components/MapLink";
import { Button } from "@/components/ui/button";

interface FAQ {
  q: { fr: string; en: string };
  a: { fr: string; en: string };
  link?: {
    label: { fr: string; en: string };
    url: { fr: string; en: string };
  };
}

export default function BinaryPage() {
  const { t, i18n } = useTranslation();
  const guestType = "b";

  const faqData = (t('faq.qanda', { returnObjects: true }) || []) as FAQ[];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <CountdownTimer />

      <h1 className="text-4xl md:text-6xl text-center gradient-text my-8">
        {t('mainTitle.title')}
      </h1>

      <div className="space-y-8">
        <Section title="Welcome">
          <p className="text-gray-700">{t('welcome.message')}</p>
        </Section>

        <Section title={t('rsvp.title')}>
          <p className="mb-4">{t('rsvp.message')}</p>
          <p className="mb-4 text-pink-600">{t('rsvp.deadline')}</p>
          <Button
            className="w-full"
            onClick={() => window.open(t(`rsvp.link.url.${guestType === 'b' ? '1' : '0'}.${i18n.language}`), '_blank')}
          >
            {t('rsvp.link.label')}
          </Button>
        </Section>

        <Section title={t('program.title')}>
          <pre className="whitespace-pre-wrap">
            {t(`program.message.${guestType === 'b' ? '1' : '0'}.${i18n.language}`)}
          </pre>
        </Section>

        <Section title={t('festivities.title')}>
          <p className="mb-4">{t('festivities.message')}</p>
          <MapLink address={t('festivities.address')} />
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

        <Section title={t('faq.title')}>
          <div className="space-y-6">
            {Array.isArray(faqData) && faqData.map((qa, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold mb-2">{qa.q[i18n.language as keyof typeof qa.q]}</h3>
                <p>{qa.a[i18n.language as keyof typeof qa.a]}</p>
                {qa.link && (
                  <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => window.open(qa.link?.url[i18n.language as keyof typeof qa.link.url], '_blank')}
                  >
                    {qa.link.label[i18n.language as keyof typeof qa.link.label]}
                  </Button>
                )}
              </div>
            ))}
          </div>
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