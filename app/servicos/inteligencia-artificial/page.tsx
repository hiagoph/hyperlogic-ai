export const metadata = {
  title: "Automação Inteligente | HyperLogic AI",
  description:
    "Automação inteligente com IA para reduzir custos, aumentar eficiência e escalar processos do seu negócio.",
};

export default function AutomacaoPage() {
  return (
    <main className="service-page">
      <section className="service-hero">
        <h1>Automação Inteligente</h1>
        <p>
          Automatizamos processos com inteligência artificial para aumentar
          eficiência, reduzir custos e escalar resultados.
        </p>
        <a href="/#contato" className="btn">
          Solicitar orçamento
        </a>
      </section>

      <section className="service-content">
        <h2>O que entregamos</h2>
        <ul>
          <li>✔ Automação de processos operacionais</li>
          <li>✔ Integração entre sistemas</li>
          <li>✔ Redução de falhas humanas</li>
          <li>✔ Escalabilidade e performance</li>
        </ul>
      </section>
    </main>
  );
}
