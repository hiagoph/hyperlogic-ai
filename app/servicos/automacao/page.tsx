export default function AutomacaoPage() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Automação Inteligente</h1>

      <p style={{ marginTop: "20px", color: "#cbd5e1" }}>
        Automatizamos processos para reduzir custos, aumentar produtividade
        e eliminar tarefas repetitivas no seu negócio.
      </p>

      <ul style={{ marginTop: "30px", color: "#cbd5e1" }}>
        <li>✔ Automação de processos internos</li>
        <li>✔ Integração entre sistemas</li>
        <li>✔ Automação com inteligência artificial</li>
        <li>✔ Redução de erros humanos</li>
      </ul>

      <a
        href="/#contato"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "14px 32px",
          background: "#38bdf8",
          color: "#020617",
          borderRadius: "30px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Solicitar orçamento
      </a>
    </main>
  );
}
