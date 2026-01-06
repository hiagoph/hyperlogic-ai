import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="reveal" aria-label="Nossas Soluções">
      <h2>Nossas Soluções</h2>
      <p className="subtitle">
        Tecnologia, design e estratégia aplicados para gerar resultados reais.
      </p>

      <div className="cards">
        <ServiceCard
          icon="⚙️"
          title="Automação Inteligente"
          description="Automação de processos com IA para reduzir custos e aumentar eficiência."
          link="/servicos/automacao"
        />

        <ServiceCard
          icon="🤖"
          title="Inteligência Artificial"
          description="Modelos de IA, chatbots e previsões inteligentes."
          link="/servicos/inteligencia-artificial"
        />

        <ServiceCard
          icon="📊"
          title="Análise de Dados"
          description="Transformamos dados brutos em insights estratégicos."
          link="/servicos/analise-dados"
        />

        <ServiceCard
          icon="🧩"
          title="Soluções Personalizadas"
          description="Sistemas sob medida alinhados ao seu negócio."
          link="/servicos/solucoes-personalizadas"
        />

        <ServiceCard
          icon="🎨"
          title="Criação de Logomarca"
          description="Identidade visual profissional e estratégica."
          link="/servicos/logomarca"
        />

        <ServiceCard
          icon="🖼️"
          title="Criação de Banner"
          description="Banners modernos para redes sociais e campanhas."
          link="/servicos/banner"
        />

        <ServiceCard
          icon="📄"
          title="Criação de Flyer"
          description="Flyers criativos para divulgação e promoções."
          link="/servicos/flyer"
        />

        <ServiceCard
          icon="🌐"
          title="Sites e Landing Pages"
          description="Sites rápidos, responsivos e focados em conversão."
          link="/servicos/sites-landing-pages"
        />
      </div>
    </section>
  );
}

