import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

export const FAQS = [
  {
    q: "Você trabalha com contratos de curto prazo?",
    a: "Sim. Atendo tanto projetos pontuais (análise, migração, otimização) quanto contratos mensais de sustentação e evolução de dados. O modelo é definido na conversa inicial conforme a necessidade.",
  },
  {
    q: "Preciso ter uma estrutura de dados já montada?",
    a: "Não. Posso partir do zero — levantamento de fontes, definição de arquitetura, implantação do data lake e entrega dos dashboards. Ou atuar em etapas específicas de um ambiente já existente.",
  },
  {
    q: "Você trabalha com equipes internas de TI?",
    a: "Sim, e é o cenário mais comum. Atuo como consultor especialista complementando a equipe interna, com foco nas ferramentas e arquitetura de dados.",
  },
  {
    q: "Qual o prazo mínimo de um projeto?",
    a: "Depende do escopo. Projetos de integração de uma API ou otimização de Snowflake podem ser entregues em 1–2 semanas. Projetos de data lake completo costumam ter 2–3 meses de duração.",
  },
  {
    q: "Trabalha sob NDA?",
    a: "Sim, assino acordo de confidencialidade em todos os projetos que envolvam dados sensíveis ou estratégicos.",
  },
  {
    q: "Meus dados ficam seguros em projetos de IA?",
    a: "Sim. As soluções podem rodar on-premise ou dentro da sua própria nuvem — em transcrição de áudio e vídeo, por exemplo, uso modelos locais em GPU própria, sem os dados saírem da empresa. NDA padrão e práticas de LGPD (anonimização de dados pessoais nos pipelines) fazem parte do escopo.",
  },
  {
    q: "IA funciona para empresa do meu tamanho?",
    a: "Funciona. Tenho cases de pequeno e grande porte: desde automações pontuais que substituem uma rotina manual até agentes de IA sobre data warehouses corporativos. O ponto de partida é sempre o processo que mais consome tempo ou dinheiro hoje.",
  },
  {
    q: "Quanto custa um projeto de IA?",
    a: "Começa com o diagnóstico gratuito, que define escopo e prioridade. Automações pontuais costumam ter escopo de 1–2 semanas; projetos maiores (agentes sobre o warehouse, modelos preditivos) são orçados por etapa depois do diagnóstico.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Dúvidas frequentes
            </p>
            <h2 className="font-display text-foreground text-4xl md:text-5xl">
              Perguntas <span className="italic">frequentes</span>.
            </h2>
          </div>
        </Reveal>
        <div className="divide-border border-border divide-y border-t border-b">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="hover:text-foreground flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-foreground text-lg md:text-xl">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? 420 : 0 }}
                  >
                    <p className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}