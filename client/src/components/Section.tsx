import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card 
        className={cn(
          "bg-white/80 backdrop-blur transition-shadow duration-200",
          "hover:shadow-lg hover:shadow-pink-200/50",
          className
        )}
      >
        <CardHeader className="pb-8">
          <CardTitle className="gradient-text text-center pb-2">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}