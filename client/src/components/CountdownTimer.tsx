import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const WEDDING_DATE = new Date("2025-08-30T14:00:00");

function calculateTimeLeft() {
  const difference = +WEDDING_DATE - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  return null;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardContent className="pt-6">
        <h2 className="text-2xl text-center gradient-text mb-4">
          {t('countdown.title')}
        </h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-3xl font-bold text-pink-600">{timeLeft.days}</div>
            <div className="text-sm text-gray-600">Days</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600">{timeLeft.hours}</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600">{timeLeft.minutes}</div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600">{timeLeft.seconds}</div>
            <div className="text-sm text-gray-600">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
