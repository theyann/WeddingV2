import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapLinkProps {
  address: string;
}

export function MapLink({ address }: MapLinkProps) {
  const handleClick = () => {
    const encodedAddress = encodeURIComponent(address);
    const mobileOS = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (mobileOS) {
      window.location.href = `geo:0,0?q=${encodedAddress}`;
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button 
        variant="outline" 
        onClick={handleClick} 
        className="w-full mt-2 gradient-border bg-white hover:bg-white/90 transition-all duration-300"
      >
        <MapPin className="mr-2 h-4 w-4 text-pink-500" />
        <span className="text-sm truncate gradient-text">{address}</span>
      </Button>
    </motion.div>
  );
}