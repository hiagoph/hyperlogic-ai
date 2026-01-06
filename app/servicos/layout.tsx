import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export default function ServicosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="service-page">
        {children}
      </main>

      <Footer />
    </>
  );
}
