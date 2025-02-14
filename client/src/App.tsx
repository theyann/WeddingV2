import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import AsteroidPage from "@/pages/asteroid";
import BinaryPage from "@/pages/binary";
import CometPage from "@/pages/comet";

function Router() {
  return (
    <Switch>
      <Route path="/asteroid" component={AsteroidPage} />
      <Route path="/binary" component={BinaryPage} />
      <Route path="/comet" component={CometPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageSwitcher />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
