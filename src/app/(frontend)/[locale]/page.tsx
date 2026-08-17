import Link from 'next/link'
import { Activity, ArrowDown, ArrowUpRight, BarChart3, Check, Flame, Gauge, Network, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { getResolvedContent } from '@/content/resolved'
import type { Locale } from '@/i18n/locales'
import { ServiceCard } from '@/components/ServiceCard'

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getResolvedContent(locale)
  const services = [['01','energiebeschaffung',t.services.procurement],['02','strom',t.services.electricity],['03','gas',t.services.gas]] as const

  return <>
    <section className="projection-hero">
      <div className="projection-grid" aria-hidden="true" />
      <div className="projection-beam projection-beam-left" aria-hidden="true" />
      <div className="projection-beam projection-beam-right" aria-hidden="true" />
      <div className="projection-lines projection-lines-top" aria-hidden="true">{Array.from({length:12}).map((_,i)=><span key={i}/>)}</div>
      <div className="shell projection-hero-inner">
        <div className="projection-kicker"><span className="projection-dot" />{t.home.eyebrow}</div>
        <h1>{t.home.title}</h1>
        <p className="projection-lead">{t.home.intro}</p>
        <div className="projection-actions">
          <Link className="projection-button projection-button-primary" href={`/${locale}/kontakt`}>{t.home.primary}<ArrowUpRight size={16}/></Link>
          <a className="projection-button projection-button-ghost" href="#services">{t.home.secondary}<ArrowDown size={15}/></a>
        </div>
        <div className="projection-dashboard-wrap">
          <div className="projection-dashboard-glow" aria-hidden="true" />
          <div className="projection-dashboard">
            <aside className="projection-dashboard-sidebar">
              <div className="projection-mini-brand"><span>EDN</span><small>ENERGY OS</small></div>
              <div className="projection-side-nav"><span className="active"><Gauge size={15}/> Overview</span><span><Activity size={15}/> Market</span><span><BarChart3 size={15}/> Contracts</span></div>
              <div className="projection-side-status"><span className="projection-live-dot"/> Market live</div>
            </aside>
            <div className="projection-dashboard-main">
              <div className="projection-dashboard-topbar"><div><small>ENERGY OVERVIEW</small><strong>Beschaffung im Blick</strong></div><span className="projection-status-pill">LIVE</span></div>
              <div className="projection-metrics">
                <article className="projection-metric projection-metric-green"><div><Zap size={17}/><span>{t.services.electricity.title}</span></div><strong>87.4</strong><small>€/MWh · Marktindikator</small></article>
                <article className="projection-metric projection-metric-purple"><div><Flame size={17}/><span>{t.services.gas.title}</span></div><strong>31.8</strong><small>€/MWh · Marktindikator</small></article>
                <article className="projection-metric projection-metric-blue"><div><ShieldCheck size={17}/><span>Monitoring</span></div><strong>24/7</strong><small>Markt & Verträge</small></article>
              </div>
              <div className="projection-chart-card"><div className="projection-chart-head"><span>Marktentwicklung</span><small>12 Monate</small></div><div className="projection-chart" aria-hidden="true"><svg viewBox="0 0 700 170"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#8b5cf6" stopOpacity=".3"/><stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/></linearGradient></defs><path className="projection-chart-area" d="M0 134 C55 118 82 131 126 104 S196 73 236 98 S320 120 360 83 S438 42 478 65 S551 111 595 82 S659 42 700 29 L700 170 L0 170 Z"/><path className="projection-chart-line" d="M0 134 C55 118 82 131 126 104 S196 73 236 98 S320 120 360 83 S438 42 478 65 S551 111 595 82 S659 42 700 29"/></svg></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="projection-intro">
      <div className="shell projection-intro-heading"><p className="projection-section-label">{t.home.trustEyebrow}</p><h2>{t.home.trustTitle}</h2><p>{t.home.trustText1}</p></div>
      <div className="shell projection-story-grid">
        <article className="projection-story-card projection-story-green"><div className="projection-story-icon"><ShieldCheck size={23}/></div><span>01</span><h3>{t.home.trustPrinciples[0]}</h3><p>{t.home.trustText2}</p><div className="projection-story-orbit" aria-hidden="true"><i/><i/><i/></div></article>
        <div className="projection-story-center"><div className="projection-control-card"><div className="projection-control-head"><span>ENERGY CONTROL</span><span className="projection-live-dot"/></div><div className="projection-control-bars"><i/><i/><i/><i/><i/></div><div className="projection-control-copy"><strong>{t.home.trustClaim}</strong><small>EDN · transparent · persönlich</small></div></div></div>
        <article className="projection-story-card projection-story-purple"><div className="projection-story-icon"><Network size={23}/></div><span>30+</span><h3>{t.home.providerTitle}</h3><p>{t.home.providerText}</p><div className="projection-network" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div></article>
      </div>
    </section>

    <section id="services" className="projection-services section"><div className="shell"><div className="projection-section-heading"><div><p className="projection-section-label">{t.home.servicesEyebrow}</p><h2>{t.home.servicesTitle}</h2></div><p>{t.home.servicesText}</p></div><div className="services-grid projection-service-grid">{services.map(([i,slug,s])=><ServiceCard key={slug} index={i} slug={slug} service={s} locale={locale}/>)}</div></div></section>

    <section className="projection-difference section"><div className="shell projection-difference-head"><p className="projection-section-label">{t.home.whyEyebrow}</p><h2>{t.home.whyTitle}</h2><p>{t.home.whyText}</p></div><div className="shell projection-difference-grid"><div className="projection-orb-card"><div className="projection-orb" aria-hidden="true"><span className="projection-orb-core"><Sparkles size={24}/></span><i className="o1"/><i className="o2"/><i className="o3"/><i className="o4"/></div><div className="projection-orb-caption"><span>EDN</span><small>Personal Energy Intelligence</small></div></div><div className="projection-benefits">{t.home.benefits.map((b:any,i:number)=><article key={b.title}><div className="projection-benefit-index">0{i+1}</div><div><h3>{b.title}</h3><p>{b.text}</p></div><Check size={18}/></article>)}</div></div></section>

    <section id="process" className="projection-process section"><div className="shell projection-section-heading"><div><p className="projection-section-label">{t.home.processEyebrow}</p><h2>{t.home.processTitle}</h2></div></div><div className="shell projection-process-grid">{t.home.process.map((p:any,i:number)=><article key={p.n}><div className="projection-process-node"><span>{p.n}</span></div><h3>{p.title}</h3><p>{p.text}</p>{i<t.home.process.length-1&&<div className="projection-process-line" aria-hidden="true"/>}</article>)}</div></section>

    <section className="projection-cta"><div className="projection-lines projection-lines-bottom" aria-hidden="true">{Array.from({length:12}).map((_,i)=><span key={i}/>)}</div><div className="shell projection-cta-card"><div className="projection-cta-logo">EDN</div><p className="projection-section-label">{t.home.ctaEyebrow}</p><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p><Link href={`/${locale}/kontakt`} className="projection-button projection-button-light">{t.home.primary}<ArrowUpRight size={16}/></Link></div></section>
  </>
}
