import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

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
    <Button variant="outline" onClick={handleClick} className="w-full mt-2">
      <MapPin className="mr-2 h-4 w-4" />
      {address}
    </Button>
  );
}
