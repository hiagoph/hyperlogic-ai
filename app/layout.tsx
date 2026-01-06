export const metadata = {
  title: "HyperLogic AI | Soluções Inteligentes em Tecnologia",
  description:
    "A HyperLogic AI oferece soluções em inteligência artificial, automação, análise de dados, criação de sites, identidade visual e tecnologia para impulsionar negócios.",
  keywords: [
    "inteligência artificial",
    "automação",
    "análise de dados",
    "criação de sites",
    "landing pages",
    "logomarca",
    "design gráfico",
    "HyperLogic AI",
  ],
  openGraph: {
    title: "HyperLogic AI | Soluções Inteligentes",
    description:
      "Soluções inteligentes que unem lógica, dados e inteligência artificial para acelerar o crescimento do seu negócio.",
    url: "https://hyperlogic-ai.vercel.app/",
    siteName: "HyperLogic AI",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
