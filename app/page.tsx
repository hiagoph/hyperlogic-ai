"use client";

import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <main>
      <Header />
      <Services />
      <About />
      <Footer />
    </main>
  );
}



