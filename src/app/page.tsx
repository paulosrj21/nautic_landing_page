"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  Stack,
  ChartLineUp,
  MapPin,
  SquaresFour,
  Lightning,
  List,
  X,
  Check,
  CaretRight,
  ChartBar,
  Robot,
  ArrowsLeftRight,
  ChatCircle,
  FileText,
} from "@phosphor-icons/react"

const WA_NUMBER = "5585936180186"
const WA_MSG = encodeURIComponent(
  "Olá! Vi o site da Nautic e gostaria de saber mais sobre a consultoria."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

const NAV = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#entregaveis" },
  { label: "Cases", href: "#cases" },
  { label: "Preços", href: "#precos" },
  { label: "Por que nós", href: "#diferenciais" },
]

const TICKER = [
  "Gestão de Processos",
  "BPM · BPMN",
  "Automação com IA",
  "Power BI",
  "Performance Operacional",
  "n8n · Make · Python",
  "Mapeamento AS-IS · TO-BE",
  "Escritório de Processos",
]

const PAIN_POINTS = [
  {
    num: "01",
    title: "Processos sem padronização",
    desc: "Retrabalho constante, inconsistências entre times e dependência de pessoas que concentram o conhecimento.",
  },
  {
    num: "02",
    title: "Sem visibilidade de performance",
    desc: "Ausência de indicadores operacionais. Gestão no feeling, sem dados para embasar decisões estratégicas.",
  },
  {
    num: "03",
    title: "Gargalos operacionais",
    desc: "Etapas que travam o fluxo de trabalho causando atrasos, perdas de prazo e frustração de clientes.",
  },
  {
    num: "04",
    title: "Equipe sobrecarregada",
    desc: "Time executando tarefas manuais e repetitivas que poderiam ser automatizadas — energia drenada do estratégico.",
  },
]

const METHODOLOGY = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Mapeamento de processos prioritários via entrevistas estruturadas. Identificação de gargalos e oportunidades.",
  },
  {
    num: "02",
    title: "AS-IS",
    desc: "Documentação do estado atual: etapas, responsáveis, ferramentas, tempos e volumes. Validação com os donos de processo.",
  },
  {
    num: "03",
    title: "Análise de GAP",
    desc: "Comparação com boas práticas do setor. Priorização das oportunidades por impacto e esforço.",
  },
  {
    num: "04",
    title: "TO-BE",
    desc: "Redesenho do processo futuro com eliminação de desperdícios e proposta de ferramentas e automações.",
  },
  {
    num: "05",
    title: "Plano de Ação",
    desc: "Roadmap com ações priorizadas, responsáveis e prazos. Quick wins identificados e entregues primeiro.",
  },
  {
    num: "06",
    title: "Rituais",
    desc: "Check-ins semanais, revisão mensal de indicadores e relatório executivo para a liderança.",
  },
]

const DELIVERABLES = [
  {
    title: "Documento AS-IS",
    desc: "Mapeamento completo do estado atual de cada processo, validado com as áreas.",
    freq: "Por processo",
  },
  {
    title: "Documento TO-BE",
    desc: "Redesenho do fluxo futuro com ganhos estimados e responsáveis definidos.",
    freq: "Por processo",
  },
  {
    title: "Plano de Ação",
    desc: "Ações priorizadas por impacto e esforço, com prazos e donos claros.",
    freq: "Mensal",
  },
  {
    title: "Painel de Indicadores",
    desc: "KPIs do processo com baseline, meta e acompanhamento da evolução.",
    freq: "Mensal",
  },
  {
    title: "Relatório Executivo",
    desc: "Sumário gerencial: avanços, resultados, pendências e próximos passos.",
    freq: "Mensal",
  },
  {
    title: "Ata de Reuniões",
    desc: "Registro de decisões, ações e responsáveis de cada rito de acompanhamento.",
    freq: "Por reunião",
  },
]

const PRICING = [
  {
    name: "START",
    price: "1.500",
    tagline: "Para empresas iniciando estruturação de processos.",
    features: [
      "1 processo por mês",
      "AS-IS + TO-BE + Plano de Ação",
      "Check-in quinzenal (30 min)",
      "Revisão mensal com relatório",
      "Suporte WhatsApp comercial",
    ],
    contract: "Contrato mínimo: 3 meses",
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "3.000",
    tagline: "Para empresas em crescimento que precisam de visibilidade operacional.",
    features: [
      "Até 3 processos ativos",
      "AS-IS + TO-BE + Indicadores (KPIs)",
      "Check-ins semanais (30 min)",
      "Revisão mensal + relatório executivo",
      "Painel de acompanhamento",
      "Suporte WhatsApp prioritário",
    ],
    contract: "Contrato mínimo: 3 meses",
    highlight: true,
  },
  {
    name: "SCALE",
    price: "5.000",
    tagline: "Médias empresas estruturando eficiência operacional para escalar.",
    features: [
      "Escritório de Processos completo",
      "Todos os processos do escopo",
      "Check-ins semanais + workshop mensal",
      "Revisão executiva trimestral",
      "Diagnóstico de performance mensal",
      "Relatório de diretoria",
      "Reuniões on-site inclusas",
    ],
    contract: "Contrato mínimo: 3 meses",
    highlight: false,
  },
]

const DIFFERENTIALS = [
  {
    icon: <Stack size={22} weight="light" />,
    title: "Perfil Híbrido",
    desc: "Combinamos BPM/BPMN e consultoria de performance. Não apenas mapeamos processos — entendemos como impactam receita, custo e pessoas.",
  },
  {
    icon: <ChartLineUp size={22} weight="light" />,
    title: "Foco em Resultado",
    desc: "Definimos indicadores de sucesso antes de começar e acompanhamos até o cliente sentir a mudança real na operação.",
  },
  {
    icon: <MapPin size={22} weight="light" />,
    title: "Proximidade Local",
    desc: "Atendemos Fortaleza e região com disponibilidade para reuniões presenciais. A relação é de parceria, não de fornecedor remoto.",
  },
  {
    icon: <SquaresFour size={22} weight="light" />,
    title: "Metodologia Clara",
    desc: "Usamos BPMN para modelagem, mas entregamos para o negócio — sem jargão. Diagramas e relatórios sempre compreensíveis para gestores.",
  },
  {
    icon: <Lightning size={22} weight="light" />,
    title: "Porta para Automação",
    desc: "Processo bem mapeado vira automação com muito mais velocidade e precisão. Acesso facilitado a projetos de automação via Nautic.",
  },
]

const AI_FEATURES = [
  {
    icon: <ChartBar size={20} weight="light" />,
    title: "Relatórios automáticos",
    desc: "Dashboards e PDFs entregues por e-mail ou WhatsApp sem trabalho manual.",
  },
  {
    icon: <Robot size={20} weight="light" />,
    title: "Agentes de IA para atendimento",
    desc: "Triagem e resposta automática a clientes com linguagem natural.",
  },
  {
    icon: <ArrowsLeftRight size={20} weight="light" />,
    title: "Integração entre sistemas",
    desc: "CRM, ERP, planilhas e APIs conectados sem fricção.",
  },
  {
    icon: <ChatCircle size={20} weight="light" />,
    title: "Automação de follow-up",
    desc: "Sequências de mensagens e alertas sem intervenção manual.",
  },
  {
    icon: <FileText size={20} weight="light" />,
    title: "Processamento de documentos",
    desc: "Extração de dados em contratos, NFes e formulários com IA.",
  },
  {
    icon: <Lightning size={20} weight="light" />,
    title: "Fluxos n8n · Make · Python",
    desc: "Orquestração entre dezenas de ferramentas sem código manual.",
  },
]

const CASES = [
  {
    sector: "Escritório de Contabilidade",
    result: "95%",
    resultLabel: "redução no tempo de escrituração de NFs",
    desc: "Lançamento manual de ~800 notas/mês com alto risco de divergências. Automatizamos a escrituração no ERP com validação e relatórios de inconsistências.",
  },
  {
    sector: "Transportadora Regional",
    result: "R$48k",
    resultLabel: "em multas prevenidas no 1º trimestre",
    desc: "Frota com 60+ veículos sem visibilidade de infrações. Monitoramento automático com alertas diários eliminando passivos não contabilizados.",
  },
  {
    sector: "Holding com 4 Filiais",
    result: "4h",
    resultLabel: "para fechar o mês — antes eram 3 dias",
    desc: "DRE consolidada manualmente em Excel entre filiais. Dashboard Power BI com atualização automática e drill-down por filial.",
  },
]

const NEXT_STEPS = [
  {
    title: "Aprovação da proposta",
    desc: "Confirmação por WhatsApp ou assinatura de contrato formal.",
  },
  {
    title: "Envio do contrato",
    desc: "Contrato digital enviado via DocuSign em até 24 horas.",
  },
  {
    title: "Primeiro pagamento",
    desc: "Emissão de boleto ou PIX referente ao primeiro mês.",
  },
  {
    title: "Kick-off",
    desc: "Reunião de abertura para alinhar agenda, participantes e materiais necessários.",
  },
  {
    title: "Início do mapeamento",
    desc: "Primeiras entrevistas e coleta de documentação dos processos priorizados.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function IconWA() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.556 4.133 1.529 5.874L.057 23.432a.5.5 0 00.608.608l5.532-1.467A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-5.064-1.404l-.363-.218-3.282.87.886-3.213-.236-.371A9.785 9.785 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z" />
    </svg>
  )
}

function ServiceRail() {
  return (
    <div className="rail" aria-label="Áreas de atuação">
      <div className="container">
        <div className="rail-list">
          {TICKER.map((t) => (
            <span key={t} className="rail-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
} as const

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ─── TOPBAR ─── */}
      <header className="topbar">
        <div className="brand-icon">
          <Stack size={18} color="#fff" weight="regular" />
        </div>
        <div>
          <div className="brand-name">Nautic</div>
          <div className="brand-sub">Processos & Performance</div>
        </div>

        <div className="topbar-sep hidden-mobile" />

        <nav className="hidden-mobile" style={{ display: "flex", alignItems: "center" }}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-item">{n.label}</a>
          ))}
        </nav>

        <div className="topbar-ml" />

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary hidden-mobile">
          <IconWA /> Falar no WhatsApp
        </a>

        <button
          className="btn btn--ghost show-mobile"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <List size={24} weight="light" />
        </button>
      </header>

      {/* ─── MOBILE MENU ─── */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div>
              <div className="brand-name">Nautic</div>
              <div className="brand-sub">Processos & Performance</div>
            </div>
            <button className="btn btn--ghost" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
              <X size={24} weight="light" />
            </button>
          </div>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
          <div className="mobile-cta">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg" style={{ width: "100%" }}>
              <IconWA /> (85) 93618-0186
            </a>
          </div>
        </div>
      )}

      <main>
        {/* ─── HERO ─── */}
        <section className="hero" id="inicio">
          <div className="container">
            <div className="hero-grid">

              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Transformamos processos em vantagem competitiva.
                </motion.h1>
                <motion.p className="hero-subtitle" variants={fadeUp}>
                  Especialistas em gestão de processos, análise de performance e automação. Seu time foca no estratégico — a operação evolui.
                </motion.p>
                <motion.div className="hero-actions" variants={fadeUp}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                    <IconWA /> Quero uma proposta
                  </a>
                  <a href="#metodologia" className="btn btn--outline btn--lg">
                    Ver metodologia <CaretRight size={14} weight="regular" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="hero-card">
                  <div className="hc-head">
                    <span className="hc-label">Processo ativo</span>
                    <span className="badge">Em andamento</span>
                  </div>

                  <div className="hc-title">Onboarding de Clientes</div>
                  <div className="hc-sub">Fase 03/06 — Análise de GAP</div>

                  <div className="hc-progress-row">
                    <span>Progresso</span>
                    <b>58%</b>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: "58%" }} />
                  </div>

                  <div className="hc-metrics">
                    {[
                      { label: "Tempo de ciclo", value: "10d → 3d", note: "-70% estimado" },
                      { label: "Retrabalho", value: "-42%", note: "vs. AS-IS" },
                    ].map((s) => (
                      <div key={s.label} className="hc-metric">
                        <div className="hc-metric-label">{s.label}</div>
                        <div className="hc-metric-value">{s.value}</div>
                        <div className="hc-metric-note">{s.note}</div>
                      </div>
                    ))}
                  </div>

                  <div className="hc-foot">
                    <span>KPIs ativos</span>
                    <b>12</b>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ServiceRail />

        {/* ─── PAIN POINTS ─── */}
        <section id="dores">
          <div className="container">
            <div className="split">
              <motion.div className="split-left" {...inView} variants={fadeUp}>
                <div className="section-label">Desafios</div>
                <h2 className="section-title">Esses cenários são familiares?</h2>
                <p className="section-sub">
                  Trabalhamos com empresas que sentem esses problemas diariamente. A boa notícia: todos têm solução estruturada.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="link-chevron">
                  Vamos resolver <CaretRight size={14} weight="regular" />
                </a>
              </motion.div>

              <motion.div className="rows" {...inView} variants={stagger}>
                {PAIN_POINTS.map((p, i) => (
                  <motion.div key={i} className="row" variants={fadeUp}>
                    <span className="row-num">{p.num}</span>
                    <div className="row-body">
                      <div className="row-title">{p.title}</div>
                      <div className="row-desc">{p.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── METHODOLOGY ─── */}
        <section id="metodologia">
          <div className="container">
            <motion.div {...inView} variants={fadeUp}>
              <div className="section-label">Metodologia</div>
              <h2 className="section-title">Como trabalhamos</h2>
              <p className="section-sub">
                Uma sequência estruturada que garante profundidade no diagnóstico, clareza no redesenho e aderência na implementação — com o time do cliente como protagonista.
              </p>
            </motion.div>

            <motion.div className="method-grid" {...inView} variants={stagger}>
              {METHODOLOGY.map((m, i) => (
                <motion.div key={i} className="method-step" variants={fadeUp}>
                  <div className="method-num">{m.num}</div>
                  <div className="method-title">{m.title}</div>
                  <div className="method-desc">{m.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── DELIVERABLES ─── */}
        <section id="entregaveis">
          <div className="container">
            <motion.div {...inView} variants={fadeUp}>
              <div className="section-label">Entregáveis</div>
              <h2 className="section-title">O que você recebe</h2>
              <p className="section-sub">
                Todos os documentos são entregues em formato digital via Google Drive compartilhado. O acesso permanece com o cliente ao final do contrato.
              </p>
            </motion.div>

            <motion.div {...inView} variants={fadeUp}>
              <div style={{ overflowX: "auto" }}>
                <table className="deliverables-table">
                  <thead>
                    <tr>
                      <th>Entregável</th>
                      <th>Descrição</th>
                      <th>Frequência</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DELIVERABLES.map((d, i) => (
                      <tr key={i}>
                        <td className="td-name">{d.title}</td>
                        <td>{d.desc}</td>
                        <td className="td-freq">{d.freq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="precos">
          <div className="container">
            <motion.div {...inView} variants={fadeUp}>
              <div className="section-label">Preços</div>
              <h2 className="section-title">Pacotes de consultoria</h2>
              <p className="section-sub">
                Faturamento mensal via PIX ou boleto. Desconto de 5% para pagamento trimestral antecipado. Reajuste anual pelo IPCA.
              </p>
            </motion.div>

            <motion.div className="pricing-grid" {...inView} variants={stagger}>
              {PRICING.map((p, i) => (
                <motion.div key={i} className={`pricing-card${p.highlight ? " pricing-card--highlight" : ""}`} variants={fadeUp}>
                  <div className="pricing-head">
                    <div className="pricing-name">{p.name}</div>
                    {p.highlight && <div className="pricing-badge">Mais popular</div>}
                  </div>
                  <div className="pricing-price">
                    <span className="pricing-currency">R$</span>
                    <span className="pricing-value">{p.price}</span>
                    <span className="pricing-period">/mês</span>
                  </div>
                  <p className="pricing-tagline">{p.tagline}</p>
                  <ul className="pricing-features">
                    {p.features.map((f, j) => (
                      <li key={j} className="pricing-feature">
                        <Check size={16} weight="regular" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${p.highlight ? "btn--primary" : "btn--outline"}`}
                  >
                    Contratar {p.name}
                  </a>
                  <div className="pricing-contract">{p.contract}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="ai-card" {...inView} variants={fadeUp}>
              <div className="ai-card-inner">
                <div className="ai-card-left">
                  <span className="ai-name">Automação com IA</span>
                  <div className="ai-price">
                    A orçar
                    <span className="ai-price-sub">por projeto</span>
                  </div>
                  <p className="ai-tagline">
                    Nenhum pacote fechado — cada projeto é mapeado do zero. Identificamos onde a IA pode eliminar trabalho manual e entregamos a solução certa para sua operação.
                  </p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--inverse">
                    <IconWA /> Solicitar orçamento
                  </a>
                </div>
                <div className="ai-card-right">
                  <div className="ai-features-label">O que pode ser automatizado</div>
                  <div className="ai-features-grid">
                    {AI_FEATURES.map((f, i) => (
                      <div key={i} className="ai-feature-item">
                        <div className="ai-feature-icon">{f.icon}</div>
                        <div>
                          <div className="ai-feature-title">{f.title}</div>
                          <div className="ai-feature-desc">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── DIFFERENTIALS ─── */}
        <section id="diferenciais">
          <div className="container">
            <div className="split">
              <motion.div className="split-left" {...inView} variants={fadeUp}>
                <div className="section-label">Diferenciais</div>
                <h2 className="section-title">Nossa diferença</h2>
                <p className="section-sub">
                  Não apenas mapeamos processos. Entregamos mudança real, acompanhamos os resultados e permanecemos ao lado da sua equipe.
                </p>
              </motion.div>

              <motion.div className="rows" {...inView} variants={stagger}>
                {DIFFERENTIALS.map((d, i) => (
                  <motion.div key={i} className="row" variants={fadeUp}>
                    <div className="row-icon">{d.icon}</div>
                    <div className="row-body">
                      <div className="row-title">{d.title}</div>
                      <div className="row-desc">{d.desc}</div>
                    </div>
                    <div className="row-caret">
                      <CaretRight size={16} weight="regular" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CASES ─── */}
        <section id="cases">
          <div className="container">
            <motion.div {...inView} variants={fadeUp}>
              <div className="section-label">Cases</div>
              <h2 className="section-title">Impacto real, números que falam.</h2>
              <p className="section-sub">
                Projetos entregues em escritórios contábeis e empresas que precisavam sair do Excel e ganhar controle de verdade.
              </p>
            </motion.div>

            <motion.div className="cases-grid" {...inView} variants={stagger}>
              {CASES.map((c, i) => (
                <motion.div key={i} className="case-card" variants={fadeUp}>
                  <div className="case-sector">{c.sector}</div>
                  <div className="case-metric-value">{c.result}</div>
                  <div className="case-metric-label">{c.resultLabel}</div>
                  <p className="case-desc">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── NEXT STEPS ─── */}
        <section id="proximos-passos">
          <div className="container">
            <div className="split">
              <motion.div className="split-left" {...inView} variants={fadeUp}>
                <div className="section-label">Próximos passos</div>
                <h2 className="section-title">Como começar</h2>
                <p className="section-sub">
                  A proposta é válida por 15 dias corridos. Para avançar, basta nos confirmar por WhatsApp. Cuidamos de toda a burocracia.
                </p>
              </motion.div>

              <motion.div className="rows" {...inView} variants={stagger}>
                {NEXT_STEPS.map((s, i) => (
                  <motion.div key={i} className="row" variants={fadeUp}>
                    <span className="row-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="row-body">
                      <div className="row-title">{s.title}</div>
                      <div className="row-desc">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section id="contato">
          <div className="container">
            <motion.div {...inView} variants={stagger}>
              <motion.h2 className="cta-title" variants={fadeUp}>
                Vamos conversar?
              </motion.h2>
              <motion.p className="cta-sub" variants={fadeUp}>
                Agende uma conversa sem compromisso. Em 30 minutos identificamos se faz sentido e como podemos ajudar sua operação a evoluir.
              </motion.p>
              <motion.div className="cta-actions" variants={fadeUp}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                  <IconWA /> (85) 93618-0186
                </a>
                <a href="mailto:pvsales33@gmail.com" className="btn btn--outline btn--lg">
                  pvsales33@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">Nautic</div>
              <div className="footer-brand-sub">Processos & Performance</div>
              <p className="footer-tagline">
                Consultoria especializada em gestão de processos, análise de performance e automação operacional. Fortaleza, CE.
              </p>
            </div>
            <nav className="footer-nav">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="footer-link">{n.label}</a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 Nautic · Fortaleza, CE</span>
            <span className="footer-copy">pvsales33@gmail.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}
