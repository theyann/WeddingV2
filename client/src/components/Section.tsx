import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatedContainer } from "./AnimatedContainer";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ title, children, className, delay }: SectionProps) {
  return (
    <AnimatedContainer delay={delay}>
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
          <CardHeader>
            <CardTitle className="gradient-text text-center">{title}</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </motion.div>
    </AnimatedContainer>
  );
}