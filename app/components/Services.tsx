export default function Services() {
  const services = [
    {
      icon: "⚙️",
      title: "Automação Inteligente",
      desc: "Automação de processos com IA para reduzir custos e aumentar eficiência.",
      slug: "automacao",
    },
    {
      icon: "🤖",
      title: "Inteligência Artificial",
      desc: "Modelos de IA, chatbots e previsões inteligentes para seu negócio.",
      slug: "inteligencia-artificial",
    },
    {
      icon: "📊",
      title: "Análise de Dados",
      desc: "Transformamos dados brutos em insights estratégicos.",
      slug: "analise-de-dados",
    },
    {
      icon: "🧩",
      title: "Soluções Personalizadas",
      desc: "Sistemas sob medida alinhados às necessidades do seu negócio.",
      slug: "solucoes-personalizadas",
    },
    {
      icon: "🎨",
      title: "Criação de Logomarca",
      desc: "Identidade visual profissional, única e alinhada à sua marca.",
      slug: "logomarca",
    },
    {
      icon: "🖼️",
      title: "Criação de Banner",
      desc: "Banners modernos e impactantes para redes sociais e campanhas.",
      slug: "banner",
    },
    {
      icon: "📄",
      title: "Criação de Flyer",
      desc: "Flyers criativos e profissionais para divulgação e promoções.",
      slug: "flyer",
    },
    {
      icon: "🌐",
      title: "Sites e Landing Pages",
      desc: "Sites rápidos, responsivos e focados em conversão.",
      slug: "sites",
    },
  ];

  return (
    <section className="reveal" aria-label="Nossas Soluções">
      <h2>Nossas Soluções</h2>
      <p className="subtitle">
        Tecnologia, design e estratégia aplicados para gerar resultados reais.
      </p>

      <div className="cards">
        {services.map((service) => (
          <div className="card reveal" key={service.slug}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <a
              href={`/servicos/${service.slug}`}
              className="card-btn"
            >
              Ver detalhes
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
