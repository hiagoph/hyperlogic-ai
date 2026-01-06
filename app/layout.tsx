import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HyperLogic AI | Soluções Inteligentes em Tecnologia",
  description:
    "A HyperLogic AI oferece soluções em inteligência artificial, automação, análise de dados, criação de sites, identidade visual e tecnologia para impulsionar negócios.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}


