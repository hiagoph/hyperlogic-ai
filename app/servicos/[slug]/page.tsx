import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const services = [
  {
    slug: "automacao",
    title: "Automação Inteligente",
    headline: "Automatize processos e escale resultados",
    description:
      "Criamos automações inteligentes que reduzem custos, eliminam tarefas manuais e aumentam a produtividade da sua empresa.",
    image: "/services/automacao.jpg",
    items: [
      "Automação de atendimento",
      "Integrações entre sistemas",
      "Fluxos inteligentes com IA",
      "Redução de tarefas manuais",
    ],
    cta: "Quero automatizar meu negócio",
  },

  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    headline: "IA aplicada ao seu negócio",
    description:
      "Soluções em inteligência artificial para gerar previsões, automações e experiências inteligentes.",
    image: "/services/inteligencia-artificial.jpg",
    items: [
      "Chatbots personalizados",
      "IA para processos internos",
      "Modelos preditivos",
      "Soluções sob medida",
    ],
    cta: "Quero usar IA no meu negócio",
  },

  {
    slug: "analise-de-dados",
    title: "Análise de Dados",
    headline: "Transforme dados em decisões estratégicas",
    description:
      "Análise de dados focada em performance, crescimento e tomada de decisão inteligente.",
    image: "/services/analise-de-dados.jpg",
    items: [
      "Dashboards interativos",
      "Relatórios estratégicos",
      "Análise de performance",
      "Insights acionáveis",
    ],
    cta: "Quero analisar meus dados",
  },

  {
    slug: "solucoes-personalizadas",
    title: "Soluções Personalizadas",
    headline: "Tecnologia sob medida para seu negócio",
    description:
      "Desenvolvemos sistemas personalizados alinhados aos objetivos da sua empresa.",
    image: "/services/solucoes-personalizadas.jpg",
    items: [
      "Sistemas sob medida",
      "Integrações específicas",
      "Alta performance",
      "Escalabilidade",
    ],
    cta: "Quero uma solução personalizada",
  },

  {
    slug: "logomarca",
    title: "Criação de Logomarca",
    headline: "Identidade visual que posiciona sua marca",
    description:
      "Criamos logotipos profissionais, estratégicos e alinhados com o seu público.",
    image: "/services/logomarca.jpg",
    items: [
      "Logo profissional",
      "Manual de marca",
      "Identidade visual",
      "Aplicações comerciais",
    ],
    cta: "Quero criar minha logomarca",
  },

  {
    slug: "banner",
    title: "Criação de Banner",
    headline: "Banners que chamam atenção e convertem",
    description:
      "Design estratégico para campanhas digitais e redes sociais.",
    image: "/services/banner.jpg",
    items: [
      "Banners digitais",
      "Artes para redes sociais",
      "Design estratégico",
      "Alta conversão",
    ],
    cta: "Quero banners profissionais",
  },

  {
    slug: "flyer",
    title: "Criação de Flyer",
    headline: "Flyers criativos e profissionais",
    description:
      "Materiais visuais para divulgação, promoções e eventos.",
    image: "/services/flyer.jpg",
    items: [
      "Flyers digitais",
      "Design criativo",
      "Artes para impressão",
      "Divulgação eficiente",
    ],
    cta: "Quero criar flyers",
  },

  {
    slug: "sites",
    title: "Sites e Landing Pages",
    headline: "Sites rápidos, modernos e focados em conversão",
    description:
      "Desenvolvemos sites profissionais com SEO, performance e design moderno.",
    image: "/services/sites.jpg",
    items: [
      "Sites institucionais",
      "Landing pages",
      "SEO otimizado",
      "Alta performance",
    ],
    cta: "Quero um site profissional",
  },
];  



export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    return (
      <section className="service-page">
        <h1>Serviço não encontrado</h1>
        <Link href="/">Voltar para a home</Link>
      </section>
    );
  }

  return (
    <section className="service-page service-enter">
      {/* HERO */}
      <div className="service-hero">
        <h1>{service.title}</h1>
        <p className="subtitle">{service.headline}</p>

        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="service-content">
        <p>{service.description}</p>

        <h2>O que oferecemos</h2>
        <ul>
          {service.items.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>

        {service.cta && (
          <div style={{ marginTop: 40 }}>
            <a
              href="https://wa.me/55SEUNUMEROAQUI"
              target="_blank"
              className="card-btn"
            >
              {service.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

