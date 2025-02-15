import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50"
      >
        <Languages className="mr-2 h-4 w-4" />
        {i18n.language.toUpperCase()}
      </Button>
    </motion.div>
  );
}