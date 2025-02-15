import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Contact {
  label: string;
  number: string;
}

interface ContactInfoProps {
  email: string;
  phones: Contact[];
}

export function ContactInfo({ email, phones }: ContactInfoProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="space-y-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="outline"
          className="w-full bg-white hover:bg-gray-50 text-gray-800"
          onClick={handleEmailClick}
        >
          <Mail className="mr-2 h-4 w-4 text-pink-600" />
          <span className="text-sm">{email}</span>
        </Button>
      </motion.div>
      
      <div className="space-y-2">
        {phones.map((phone, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="w-full bg-white hover:bg-gray-50 text-gray-800"
              onClick={() => handlePhoneClick(phone.number)}
            >
              <Phone className="mr-2 h-4 w-4 text-pink-600" />
              <span className="text-sm">
                {phone.label}: {phone.number}
              </span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
