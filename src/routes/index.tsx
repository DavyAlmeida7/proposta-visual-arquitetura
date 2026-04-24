import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/FloatingNav";
import heroImg from "@/assets/hero-architecture.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aboutDetail from "@/assets/about-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--sage-deep)]">
      <span className="h-px w-8 bg-[color:var(--sage-deep)]/60" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--sage), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--sand), transparent)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionLabel>Apresentação conceitual · Giovanna Caires</SectionLabel>
          <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-display leading-[1.02] tracking-tight text-foreground">
            Proposta visual para o{" "}
            <em className="font-medium italic text-[color:var(--sage-deep)]">site-portfólio</em>{" "}
            de Giovanna Caires.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Este documento reúne a estrutura, a linguagem e a direção estética pensadas para
            apresentar sua presença digital — um ponto de partida para discussão, não uma versão
            final.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span
              aria-hidden
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
            >
              Estrutura proposta
            </span>
            <span
              aria-hidden
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur"
            >
              Direção visual sugerida
            </span>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">Foco</dt>
              <dd className="mt-1 font-display text-xl">Autoridade</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">Conteúdo</dt>
              <dd className="mt-1 font-display text-xl">Portfólio</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">Tom</dt>
              <dd className="mt-1 font-display text-xl">Editorial</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden organic-mask-1 shadow-[var(--shadow-float)]">
            <img
              src={heroImg}
              alt="Interior arquitetônico com luz natural e tons quentes"
              className="h-full w-full object-cover"
              width={1536}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full sm:block"
               style={{ background: "var(--gradient-sage)", boxShadow: "var(--shadow-soft)" }} />
          <div className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs backdrop-blur sm:block">
            <div className="font-display text-sm">Exemplo de projeto</div>
            <div className="text-muted-foreground">Imagem ilustrativa · referência visual</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQueAgora() {
  const items = [
    {
      n: "01",
      t: "Identidade própria",
      d: "Um espaço com a sua linguagem visual, fora do layout padrão de redes sociais.",
    },
    {
      n: "02",
      t: "Navegação clara",
      d: "Cada projeto pode ter contexto, fotos e detalhes — apresentado em um fluxo organizado.",
    },
    {
      n: "03",
      t: "Apresentação profissional",
      d: "Um endereço próprio para compartilhar em indicações, propostas e contatos comerciais.",
    },
    {
      n: "04",
      t: "Portfólio organizado",
      d: "Projetos agrupados por categoria, ano ou destaque, com a ordem definida pela arquiteta.",
    },
  ];
  return (
    <section id="proposta" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Bloco de proposta</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
              Um site-portfólio com{" "}
              <em className="italic text-[color:var(--sage-deep)]">identidade própria</em>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              A proposta reúne quatro pilares: identidade visual autoral, apresentação estratégica
              dos projetos, gestão simples de atualização e foco em imagem profissional.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {items.map((it) => (
              <li
                key={it.n}
                className="group rounded-3xl border border-border/70 bg-card p-7 transition-all hover:border-[color:var(--sage)] hover:shadow-[var(--shadow-soft)]"
              >
                <div className="text-xs tracking-[0.2em] text-[color:var(--sage-deep)]">{it.n}</div>
                <div className="mt-3 font-display text-2xl">{it.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Estrutura() {
  const routes = [
    { path: "/", label: "Home proposta", desc: "Abertura, projetos em destaque, sobre e contato." },
    { path: "/projetos", label: "Página de projetos", desc: "Reúne o portfólio com filtros por tipo, ano ou categoria." },
    { path: "/projeto/[slug]", label: "Página individual", desc: "Cada projeto em uma página própria, com galeria e detalhes." },
    { path: "/admin", label: "Gestão simples", desc: "Acesso protegido para atualizar projetos e ordem de exibição." },
    { path: "/blog", label: "Blog (opcional)", desc: "Espaço para conteúdos autorais e reforço de autoridade." },
  ];
  return (
    <section id="estrutura" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Estrutura sugerida do site</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
            Exemplo de como o site poderia ser organizado.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cinco rotas que cobrem apresentação, portfólio, detalhe de cada projeto e gestão
            interna. Estrutura aberta a ajustes durante o desenvolvimento.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          {routes.map((r, i) => (
            <div
              key={r.path}
              className={`grid grid-cols-12 items-center gap-4 px-6 py-6 sm:px-10 ${
                i !== routes.length - 1 ? "border-b border-border/70" : ""
              } transition-colors hover:bg-[color:var(--bone)]`}
            >
              <div className="col-span-12 sm:col-span-1 text-xs tracking-widest text-muted-foreground">
                0{i + 1}
              </div>
              <code className="col-span-12 sm:col-span-4 font-mono text-sm text-[color:var(--sage-deep)]">
                {r.path}
              </code>
              <div className="col-span-12 sm:col-span-3 font-display text-xl">{r.label}</div>
              <div className="col-span-12 sm:col-span-4 text-sm text-muted-foreground">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecoesHome() {
  const blocks = [
    { t: "Hero", d: "Abertura visual com imagem e apresentação resumida." },
    { t: "Projetos", d: "Seleção de três projetos principais em destaque." },
    { t: "Serviços", d: "Tipos de atuação, especialidades e diferenciais de atendimento." },
    { t: "Processo", d: "Resumo das etapas: escuta, proposta, detalhamento, acompanhamento." },
    { t: "Sobre mim", d: "Espaço dedicado à história e à forma de trabalhar de Giovanna." },
    { t: "Depoimentos", d: "Área prevista para feedbacks reais de clientes (quando houver)." },
    { t: "FAQ", d: "Reúne dúvidas frequentes para deixar a navegação mais clara." },
    { t: "Contato", d: "Espaço previsto para WhatsApp, e-mail, Instagram e localização." },
  ];
  return (
    <section className="relative py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <SectionLabel>Organização do conteúdo</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
              Exemplo de seções para a home.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Cada bloco tem uma função clara dentro da narrativa. A ordem e a presença de cada um
            podem ser ajustadas conforme a prioridade do escritório.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <div
              key={b.t}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="text-[11px] tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-2xl">{b.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-60"
                style={{ background: "var(--sage)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjetosDestaque() {
  const projetos = [
    { img: project1, nome: "Projeto exemplo 01", cidade: "Cidade ilustrativa", tipo: "Residencial", ano: "Ano" },
    { img: project2, nome: "Projeto exemplo 02", cidade: "Cidade ilustrativa", tipo: "Reforma", ano: "Ano" },
    { img: project3, nome: "Projeto exemplo 03", cidade: "Cidade ilustrativa", tipo: "Residencial", ano: "Ano" },
  ];
  return (
    <section id="projetos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Projetos em destaque</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
              Três projetos em destaque na home.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A home pode trazer uma curadoria de três projetos principais. A página de projetos
              reúne todo o portfólio com filtros, e cada projeto pode abrir uma página própria.
            </p>
          </div>
          <span
            aria-hidden
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            Exemplo de navegação
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projetos.map((p, i) => (
            <article key={p.nome} className="group">
              <div
                className={`relative aspect-[4/5] overflow-hidden ${
                  i === 1 ? "organic-mask-2" : i === 2 ? "organic-mask-3" : "organic-mask-1"
                } shadow-[var(--shadow-soft)]`}
              >
                <img
                  src={p.img}
                  alt={p.nome}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl leading-tight">{p.nome}</h3>
                <span className="text-xs text-muted-foreground">{p.ano}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {p.cidade} · {p.tipo}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground/70">
                Conteúdo ilustrativo
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaginaProjeto() {
  const campos = [
    { l: "Nome", v: "Nome do projeto" },
    { l: "Cidade", v: "Cidade ilustrativa" },
    { l: "Tipo", v: "Residencial · Reforma" },
    { l: "Ano", v: "Ano" },
  ];
  const blocos = [
    { t: "Contexto", d: "Espaço para um breve resumo do projeto, ambiente e ponto de partida." },
    { t: "Necessidade", d: "O que o cliente buscava — pode ser preenchido caso a caso." },
    { t: "Solução proposta", d: "Direção do projeto e principais decisões de arquitetura e interiores." },
    { t: "Planta (opcional)", d: "Pode receber uma planta esquemática para apoiar a leitura do projeto." },
    { t: "Antes e depois (opcional)", d: "Comparativo visual quando fizer sentido apresentar a transformação." },
  ];
  return (
    <section id="projeto" className="relative py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Página individual de projeto</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
            Como cada projeto pode ser apresentado.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estrutura sugerida: galeria de abertura, dados do projeto e blocos curtos com contexto,
            necessidade e solução proposta. Conteúdo abaixo é ilustrativo.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-[var(--shadow-float)]">
          <div className="relative aspect-[16/8]">
            <img
              src={project1}
              alt="Mock-up de página individual de projeto"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <div className="text-[11px] tracking-widest opacity-80">EXEMPLO DE PROJETO</div>
                <h3 className="mt-2 font-display text-3xl sm:text-5xl">Nome do projeto</h3>
              </div>
              <div className="hidden text-right text-xs opacity-80 sm:block">galeria de fotos</div>
            </div>
          </div>

          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12">
            <dl className="space-y-5 lg:col-span-3">
              {campos.map((c) => (
                <div key={c.l}>
                  <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.l}
                  </dt>
                  <dd className="mt-1 font-display text-lg">{c.v}</dd>
                </div>
              ))}
            </dl>

            <div className="space-y-7 lg:col-span-9">
              {blocos.map((b) => (
                <div key={b.t} className="border-l-2 border-[color:var(--sage)] pl-5">
                  <div className="font-display text-xl">{b.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
              <span
                aria-hidden
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background"
              >
                Exemplo de fechamento da página
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdminSimples() {
  const acoes = [
    "Cadastrar projetos novos",
    "Editar projetos existentes",
    "Remover projetos",
    "Organizar a ordem de exibição",
    "Marcar projetos em destaque",
    "Acesso protegido por login",
  ];
  return (
    <section id="admin" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionLabel>Área administrativa</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
            Você no controle.<br />
            <em className="italic text-[color:var(--sage-deep)]">Sem precisar</em> de ninguém.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Uma área protegida, pensada para o seu dia a dia. Sem termos técnicos, sem fricção.
            Você entra, atualiza e o site reflete na hora.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-border bg-foreground p-2 shadow-[var(--shadow-float)]">
            <div className="rounded-[1.6rem] bg-background p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--clay)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--sand)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--sage)]" />
                </div>
                <code className="text-xs text-muted-foreground">/admin</code>
              </div>

              <div className="mb-5 font-display text-xl">Seus projetos</div>
              <ul className="space-y-2.5">
                {acoes.map((a, i) => (
                  <li
                    key={a}
                    className="flex items-center justify-between rounded-xl border border-border/70 bg-[color:var(--bone)] px-4 py-3 text-sm"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--sage)]/20 text-[color:var(--sage-deep)] text-xs">
                        ✓
                      </span>
                      {a}
                    </span>
                    <span className="text-xs text-muted-foreground">passo {i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Opcionais() {
  const mods = [
    { t: "Blog", d: "Reforço de autoridade e descoberta orgânica, se houver produção de conteúdo útil." },
    { t: "Fornecedores", d: "Lista organizada de marceneiros, lojas, profissionais de confiança." },
    { t: "Clientes & arquivos", d: "Cada cliente com seu espaço, documentos e referências." },
    { t: "Biblioteca de referências", d: "Um banco visual com tudo que te inspira, organizado por tema." },
    { t: "Paletas & apresentação", d: "Gerador simples para montar paletas e materiais de proposta." },
  ];
  return (
    <section className="relative py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>Possibilidades opcionais</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
              Ferramentas que crescem com você.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground lg:col-span-5">
            Além da gestão de projetos, a área administrativa também pode receber ferramentas
            complementares de organização e apoio ao dia a dia do escritório, de acordo com o que
            fizer sentido para sua rotina.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {mods.map((m, i) => (
            <div
              key={m.t}
              className={`rounded-3xl border border-border bg-background p-6 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--sage)]/20 text-[color:var(--sage-deep)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl">{m.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirecaoVisual() {
  const paletas = [
    {
      nome: "Paleta 01",
      foco: "Verde como foco",
      cores: ["#ADC6A7", "#8FA286", "#F6F3EE", "#D9CFC2", "#171A1D"],
    },
    {
      nome: "Paleta 02",
      foco: "Verde + madeira",
      cores: ["#A8B79E", "#8C5D3D", "#6A4630", "#EFE7DD", "#1C1D1F"],
    },
    {
      nome: "Paleta 03",
      foco: "Amarronzado como foco",
      cores: ["#B76942", "#E7D8C9", "#9D8D80", "#A7B39A", "#17191C"],
    },
  ];
  return (
    <section id="visual" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Direção visual</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
            Três caminhos cromáticos.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bases neutras e quentes, com um acento de cor para conduzir o olhar. Escolhemos juntas
            a que mais traduz seu trabalho.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {paletas.map((p) => (
            <div
              key={p.nome}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-44 grid-cols-5">
                {p.cores.map((c) => (
                  <div key={c} style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-widest text-muted-foreground">{p.nome}</div>
                <div className="mt-1 font-display text-2xl">{p.foco}</div>
                <ul className="mt-4 grid grid-cols-5 gap-2 text-[10px] text-muted-foreground">
                  {p.cores.map((c) => (
                    <li key={c} className="text-center">
                      <div
                        className="mx-auto mb-1 h-6 w-6 rounded-full border border-border/70"
                        style={{ backgroundColor: c }}
                      />
                      <code className="font-mono">{c}</code>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tipografia() {
  const opcoes = [
    { n: "01", display: '"Cormorant Garamond", serif', body: '"Manrope", sans-serif', dn: "Cormorant Garamond", bn: "Manrope" },
    { n: "02", display: '"Playfair Display", serif', body: '"Inter", sans-serif', dn: "Playfair Display", bn: "Inter" },
    { n: "03", display: '"Libre Baskerville", serif', body: '"Plus Jakarta Sans", sans-serif', dn: "Libre Baskerville", bn: "Plus Jakarta Sans" },
    { n: "04", display: '"Bodoni Moda", serif', body: '"Inter", sans-serif', dn: "Bodoni Moda", bn: "Inter" },
  ];
  return (
    <section className="relative py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Tipografia</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
            Quatro pares para experimentar.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {opcoes.map((o) => (
            <div
              key={o.n}
              className="rounded-3xl border border-border bg-background p-8 transition-colors hover:border-[color:var(--sage)]"
            >
              <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="tracking-widest">OPÇÃO {o.n}</span>
                <span>
                  {o.dn} <span className="text-[color:var(--sage-deep)]">+</span> {o.bn}
                </span>
              </div>
              <div
                className="text-5xl leading-none tracking-tight"
                style={{ fontFamily: o.display, fontWeight: 500 }}
              >
                Espaços que <em>respiram</em>.
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: o.body }}>
                Cada projeto começa por uma escuta atenta. Entender a rotina, a luz, o tempo de cada
                ambiente. A arquitetura nasce desse cuidado silencioso com o cotidiano.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PresencaLocal() {
  const canais = [
    { t: "Google Business", d: "Apareça em buscas locais com fotos atualizadas e avaliações reais." },
    { t: "WhatsApp", d: "Botão de contato direto no site, com mensagem pré-preenchida." },
    { t: "Instagram", d: "Continua sendo a vitrine do dia a dia — agora apoiando o portfólio." },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden organic-mask-2 shadow-[var(--shadow-float)]">
              <img
                src={aboutDetail}
                alt="Detalhe de planta arquitetônica desenhada à mão"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionLabel>Presença local</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-display leading-[1.05] tracking-tight">
              O site não trabalha sozinho.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Ele se conecta aos canais que você já usa, criando um ecossistema discreto e
              consistente em torno do seu nome.
            </p>

            <div className="mt-8 space-y-3">
              {canais.map((c) => (
                <div
                  key={c.t}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <div
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: "var(--gradient-sage)" }}
                  />
                  <div>
                    <div className="font-display text-lg">{c.t}</div>
                    <p className="text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="contato" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center sm:px-16 sm:py-28"
          style={{ background: "oklch(0.18 0.012 260)" }}
        >
          <div
            aria-hidden
            className="absolute -left-20 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--sage)" }}
          />
          <div
            aria-hidden
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--clay)" }}
          />

          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--sage)]">
              Próximo passo
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight text-background">
              Vamos lapidar essa<br />
              proposta <em className="italic text-[color:var(--sage)]">juntas</em>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-background/70">
              Uma conversa curta, sem compromisso, para alinhar escopo, prazos e o caminho visual
              que mais combina com o seu trabalho.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:ola@estudio.com"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
              >
                Agendar conversa →
              </a>
              <a
                href="#topo"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-4 text-sm text-background transition-colors hover:bg-background/10"
              >
                Revisar a proposta
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© Apresentação de proposta · Documento confidencial</div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-4 w-4 rounded-full"
              style={{ background: "var(--gradient-sage)" }}
            />
            estúdio
          </div>
        </footer>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <FloatingNav />
      <main>
        <Hero />
        <PorQueAgora />
        <Estrutura />
        <SecoesHome />
        <ProjetosDestaque />
        <PaginaProjeto />
        <AdminSimples />
        <Opcionais />
        <DirecaoVisual />
        <Tipografia />
        <PresencaLocal />
        <CTAFinal />
      </main>
    </div>
  );
}
