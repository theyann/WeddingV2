import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapLinkProps {
  address: string;
}

export function MapLink({ address }: MapLinkProps) {
  const handleClick = () => {
    const encodedAddress = encodeURIComponent(address);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Universal Google Maps URL that works on all platforms
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    try {
      if (isIOS) {
        // iOS uses maps:// scheme
        window.location.href = `maps://?q=${encodedAddress}`;
        // Fallback after a short delay if maps:// didn't work
        setTimeout(() => {
          window.location.href = googleMapsUrl;
        }, 500);
      } else if (isAndroid) {
        // Android uses geo: scheme with fallback
        window.location.href = `geo:0,0?q=${encodedAddress}`;
        // Fallback after a short delay if geo: didn't work
        setTimeout(() => {
          window.location.href = googleMapsUrl;
        }, 500);
      } else {
        // Desktop or unsupported mobile browser
        window.open(googleMapsUrl, '_blank');
      }
    } catch (error) {
      // Final fallback if anything goes wrong
      window.open(googleMapsUrl, '_blank');
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
        className="w-full mt-2 gradient-border bg-pink-600 hover:bg-pink-500 transition-all duration-300"
      >
        <MapPin className="mr-2 h-4 w-4 text-white" />
        <span className="text-sm truncate text-white">{address}</span>
      </Button>
    </motion.div>
  );
}