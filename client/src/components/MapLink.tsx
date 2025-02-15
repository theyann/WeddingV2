import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapLinkProps {
  address: string;
}

export function MapLink({ address }: MapLinkProps) {
  const handleClick = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button 
        variant="outline" 
        onClick={handleClick} 
        className="w-full mt-2 gradient-border bg-pink-600 hover:bg-pink-500 transition-all duration-300"
      >
        <MapPin className="mr-2 h-4 w-4 text-white" />
        <span className="text-sm truncate text-white">{address}</span>
      </Button>
    </motion.div>
  );
}