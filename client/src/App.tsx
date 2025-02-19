import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Mission from "@/pages/mission";
import Vision from "@/pages/vision";
import Philosophy from "@/pages/philosophy";
import Strategy from "@/pages/strategy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/mission" component={Mission} />
          <Route path="/vision" component={Vision} />
          <Route path="/philosophy" component={Philosophy} />
          <Route path="/strategy" component={Strategy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;