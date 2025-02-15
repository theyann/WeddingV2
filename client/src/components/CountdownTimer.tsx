import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
        <motion.h2 
          className="text-2xl text-center gradient-text mb-4 pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('countdown.title')}
        </motion.h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit}>
              <motion.div 
                className="text-3xl font-bold text-pink-600"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: index * 0.1
                }}
              >
                {value}
              </motion.div>
              <div className="text-sm text-gray-600 capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}