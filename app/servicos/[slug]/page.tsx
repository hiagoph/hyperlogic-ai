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
    description:
      "Automação de processos com inteligência artificial para reduzir custos e aumentar eficiência.",
    items: [
      "Automação de atendimento",
      "Integrações entre sistemas",
      "Fluxos inteligentes com IA",
      "Redução de tarefas manuais",
    ],
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    description:
      "Soluções em IA como chatbots, análise preditiva e modelos inteligentes.",
    items: [
      "Chatbots personalizados",
      "Análise preditiva",
      "IA para negócios",
      "Modelos sob medida",
    ],
  },
  {
    slug: "analise-de-dados",
    title: "Análise de Dados",
    description:
      "Transformamos dados em insights estratégicos para decisões inteligentes.",
    items: [
      "Dashboards interativos",
      "Relatórios estratégicos",
      "Análise de performance",
      "Insights acionáveis",
    ],
  },
  {
    slug: "solucoes-personalizadas",
    title: "Soluções Personalizadas",
    description:
      "Sistemas desenvolvidos sob medida para as necessidades do seu negócio.",
    items: [
      "Sistemas customizados",
      "Integrações específicas",
      "Escalabilidade",
      "Alta performance",
    ],
  },
  {
    slug: "logomarca",
    title: "Criação de Logomarca",
    description:
      "Identidade visual profissional, forte e alinhada à sua marca.",
    items: [
      "Logo profissional",
      "Manual de marca",
      "Identidade visual",
      "Aplicações comerciais",
    ],
  },
  {
    slug: "banner",
    title: "Criação de Banner",
    description:
      "Banners modernos e impactantes para redes sociais e campanhas.",
    items: [
      "Banners digitais",
      "Design estratégico",
      "Alta conversão",
      "Artes profissionais",
    ],
  },
  {
    slug: "flyer",
    title: "Criação de Flyer",
    description:
      "Flyers criativos e profissionais para divulgação e promoções.",
    items: [
      "Flyers digitais",
      "Design criativo",
      "Divulgação eficaz",
      "Artes prontas para impressão",
    ],
  },
  {
    slug: "sites",
    title: "Sites e Landing Pages",
    description:
      "Sites rápidos, responsivos e focados em conversão.",
    items: [
      "Sites institucionais",
      "Landing pages",
      "SEO",
      "Alta performance",
    ],
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
  const { slug } = await params; // 👈 ISSO É O PONTO CRÍTICO

  const service = services.find(
    (service) => service.slug === slug
  );

  if (!service) {
    return (
      <section className="service-page service-enter">
        <h1>Serviço não encontrado</h1>
        <Link href="/">Voltar para a home</Link>
      </section>
    );
  }

  return (
    <section className="service-page service-enter">
      <div className="service-hero">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      <div className="service-content">
        <h2>O que oferecemos</h2>
        <ul>
          {service.items.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>

        <div style={{ marginTop: 40 }}>
          <Link href="/#contato" className="card-btn">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
