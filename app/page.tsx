"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main>

      <header>
        <h1>HyperLogic <span>AI</span></h1>
        <p>Soluções inteligentes que unem lógica, dados, design e tecnologia para acelerar o crescimento do seu negócio.</p>
        <a href="#contato" className="btn">Fale Conosco</a>
      </header>

      <section className="reveal">
        <h2>Nossas Soluções</h2>
        <p className="subtitle">Tecnologia, design e estratégia aplicados para gerar resultados reais.</p>

        <div className="cards">
          {[
            ["⚙️", "Automação Inteligente", "Automação de processos com IA para reduzir custos e aumentar eficiência."],
            ["🤖", "Inteligência Artificial", "Modelos de IA, chatbots e previsões inteligentes."],
            ["📊", "Análise de Dados", "Transformamos dados em decisões estratégicas."],
            ["🧩", "Soluções Personalizadas", "Sistemas sob medida para seu negócio."],
            ["🎨", "Criação de Logomarca", "Identidade visual profissional e estratégica."],
            ["🖼️", "Criação de Banner", "Banners modernos e impactantes."],
            ["📄", "Criação de Flyer", "Flyers criativos para divulgação."],
            ["🌐", "Sites e Landing Pages", "Sites rápidos, modernos e focados em conversão."]
          ].map(([icon, title, desc]) => (
            <div className="card reveal" key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contato" className="card-btn">Solicitar orçamento</a>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <h2>Sobre a HyperLogic AI</h2>
        <p className="subtitle">Inovação, estratégia e tecnologia.</p>

        <div className="about">
          <div>
            <p>A <strong>HyperLogic AI</strong> entrega soluções digitais focadas em crescimento e resultados reais.</p>
          </div>
          <div>
            <p>✔ Tecnologia de ponta</p>
            <p>✔ Design estratégico</p>
            <p>✔ Foco em conversão</p>
          </div>
        </div>
      </section>

      <section id="contato" className="reveal">
        <h2>Entre em Contato</h2>
        <p className="subtitle">Vamos transformar seu negócio.</p>
        <div style={{ textAlign: "center" }}>
          <p>Email: contato@hyperlogicai.com</p>
          <p>WhatsApp: +55 (00) 00000-0000</p>
        </div>
      </section>

      <footer>
        <p>© 2025 HyperLogic AI. Todos os direitos reservados.</p>
      </footer>

      <a
        href="https://wa.me/5500000000000"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </main>
  );
}

