import dashboardAsset from "@/assets/dashboard.png.asset.json";
import gavetaAsset from "@/assets/gaveta.png.asset.json";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  tags: string[];
  /** Rich content as ordered blocks. */
  blocks: BlogBlock[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] }
  | { type: "check"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      /** Let the image break out wider than the article column. */
      wide?: boolean;
    }
  | { type: "flow"; steps: string[] }
  | { type: "tldr"; title?: string; items: string[] }
  | {
      type: "compare";
      before: { title: string; items: string[] };
      after: { title: string; items: string[] };
    };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "importancia-organizacao-de-dados",
    title: "A importância da organização de dados: por que uma boa arquitetura muda o jogo",
    excerpt:
      "Dados existem em quase toda empresa, mas raramente estão prontos para decidir. Veja por que estruturar bem a sua base é o que separa relatórios atrasados de decisões em tempo real.",
    cover: gavetaAsset.url,
    coverAlt:
      "Comparação visual entre uma gaveta bagunçada e uma gaveta com separadores organizando meias e gravatas",
    date: "2026-06-22",
    dateLabel: "22 de junho de 2026",
    readingTime: "6 min de leitura",
    category: "Engenharia de Dados",
    tags: ["Arquitetura de Dados", "BI", "Tomada de Decisão"],
    blocks: [
      {
        type: "lead",
        text: "Dados organizados são como uma gaveta bem arrumada. Parece uma analogia simples — e é exatamente por isso que funciona tão bem para explicar por que tantas empresas perdem dinheiro mesmo tendo informação de sobra.",
      },
      {
        type: "tldr",
        title: "Resumo rápido",
        items: [
          "Dado existe na maioria das empresas — o que falta é estrutura.",
          "Sem organização, decisões dependem de copiar e colar planilha.",
          "Pipeline automatizado libera de 10 a 20 horas por semana.",
          "Painel pronto > relatório feito na unha toda semana.",
        ],
      },
      { type: "h2", text: "Imagine começar o dia procurando uma meia" },
      {
        type: "p",
        text: "Você abre a gaveta pela manhã para escolher uma meia e uma gravata. De um lado, tudo misturado: meias enroladas, gravatas embaraçadas, cores e padrões empilhados. Você perde tempo, mexe em tudo e, na pressa, acaba pegando a primeira coisa que aparece.",
      },
      {
        type: "p",
        text: "Agora imagine a mesma gaveta com separadores. Cada peça tem seu lugar. As meias divididas por categoria, as gravatas separadas por cor e estilo. Em segundos você encontra exatamente o que precisa.",
      },
      {
        type: "quote",
        text: "A diferença não está nas peças. A diferença está na organização.",
      },
      { type: "h2", text: "Com dados, acontece exatamente a mesma coisa" },
      {
        type: "p",
        text: "A maioria das empresas tem informação valiosa, mas espalhada em lugares que não conversam entre si: marketplaces como Mercado Livre, Shopee e TikTok Shop, sistemas ERP, planilhas Excel, relatórios manuais, pedidos no WhatsApp e bases isoladas em cada departamento.",
      },
      {
        type: "p",
        text: "Os dados existem. O problema é que estão como uma gaveta bagunçada — e, antes de qualquer decisão, alguém precisa garimpar tudo.",
      },
      {
        type: "compare",
        before: {
          title: "Antes — gaveta bagunçada",
          items: [
            "Exportar arquivo de cada marketplace",
            "Copiar e colar entre planilhas",
            "Corrigir erros manualmente",
            "Consolidar dados de várias fontes",
            "Esperar horas para enxergar o cenário",
            "Decidir com a informação que sobrou",
          ],
        },
        after: {
          title: "Depois — gaveta com separadores",
          items: [
            "Conexão automática com as fontes",
            "Limpeza e padronização garantidas",
            "Dados integrados em um só lugar",
            "Indicadores atualizados em tempo real",
            "Decisão em minutos, não em dias",
            "Time focado em estratégia, não em planilha",
          ],
        },
      },
      {
        type: "callout",
        title: "Enquanto isso, o negócio perde velocidade.",
        text: "Cada hora gasta organizando planilha é uma hora a menos pensando em estratégia, cliente e crescimento.",
      },
      { type: "h2", text: "A organização transforma dados em decisões" },
      {
        type: "p",
        text: "Quando criamos uma estrutura de dados organizada, o processo muda completamente. As informações passam por um fluxo automatizado, ponta a ponta:",
      },
      {
        type: "flow",
        steps: [
          "Fontes de dados",
          "Integração",
          "Tratamento",
          "Organização",
          "Dashboard gerencial",
        ],
      },
      {
        type: "image",
        src: dashboardAsset.url,
        alt: "Dados espalhados em planilhas versus pipeline automatizado entregando um dashboard gerencial",
        caption: "Do operacional desconectado ao painel pronto para decisão.",
        wide: true,
      },
      {
        type: "p",
        text: "É como colocar separadores dentro da gaveta. Cada informação fica no lugar certo, pronta para ser encontrada quando você precisar — sem retrabalho, sem cópia manual, sem risco de erro.",
      },
      { type: "h3", text: "Na prática, a empresa passa a:" },
      {
        type: "check",
        items: [
          "Visualizar indicadores em tempo real",
          "Identificar problemas antes que virem prejuízo",
          "Entender vendas, clientes, estoque e operação em um só lugar",
          "Tomar decisões baseadas em dados confiáveis",
          "Dedicar mais tempo à estratégia e menos ao operacional",
        ],
      },
      { type: "h2", text: "Dados organizados geram decisões mais claras" },
      {
        type: "p",
        text: "Um gestor não deveria precisar abrir dezenas de planilhas para responder perguntas simples:",
      },
      {
        type: "ul",
        items: [
          "Qual canal está vendendo mais?",
          "Qual produto está dando mais resultado?",
          "Onde estou perdendo dinheiro?",
          "Qual decisão preciso tomar hoje?",
        ],
      },
      {
        type: "p",
        text: "O ideal é abrir um painel e enxergar a resposta. Assim como uma gaveta organizada permite encontrar uma gravata em segundos, uma arquitetura de dados bem estruturada permite encontrar oportunidades — e problemas — com a mesma rapidez.",
      },
      {
        type: "quote",
        text: "Dados bagunçados geram dúvidas. Dados organizados geram decisões.",
      },
      { type: "h2", text: "Por onde começar" },
      {
        type: "p",
        text: "Você não precisa reorganizar tudo de uma vez. O caminho passa por mapear as fontes, definir o que realmente importa medir e montar um pipeline simples que entregue valor já nas primeiras semanas. A partir daí, cada camada nova só multiplica o resultado.",
      },
      {
        type: "p",
        text: "Se a sua operação ainda depende de planilha consolidada na unha, esse é o melhor momento para colocar separadores na gaveta.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}