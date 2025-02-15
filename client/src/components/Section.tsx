import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatedContainer } from "./AnimatedContainer";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ title, children, className, delay }: SectionProps) {
  return (
    <AnimatedContainer delay={delay}>
      <Card className={cn("bg-white/80 backdrop-blur", className)}>
        <CardHeader>
          <CardTitle className="gradient-text text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </AnimatedContainer>
  );
}