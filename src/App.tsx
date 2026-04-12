import React from "react";
import { 
  Navbar, 
  Hero, 
  Stats, 
  About, 
  Services, 
  Innovation, 
  Contact, 
  Footer 
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-gebe-green/20 selection:text-gebe-green">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
