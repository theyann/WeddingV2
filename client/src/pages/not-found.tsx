import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 mb-6 text-sm text-gray-600">
            The page you are looking for doesn't exist. Please select one of the following guest types:
          </p>

          <div className="space-y-2">
            <Link href="/asteroid">
              <Button variant="outline" className="w-full">
                Drink Only Guest (Asteroid)
              </Button>
            </Link>
            <Link href="/binary">
              <Button variant="outline" className="w-full">
                Full Day Guest (Binary)
              </Button>
            </Link>
            <Link href="/comet">
              <Button variant="outline" className="w-full">
                Party Only Guest (Comet)
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}