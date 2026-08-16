import Link from 'next/link'
import de from '@/content/de'
import en from '@/content/en'
import { ServiceCard } from '@/components/ServiceCard'
import { Noise } from '@/components/Noise'

export default async function Home({ params }: { params: Promise<{ locale: 'de'|'en' }> }) {
  const { locale } = await params
  const t = locale === 'de' ? de : en
  const services = [
    ['01', 'energy', t.services.energy], ['02', 'finance', t.services.finance], ['03', 'real-estate', t.services.realEstate], ['04', 'telecom', t.services.telecom]
  ] as const

  return <>
    <section className="hero">
      <Noise />
      <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-lead">{t.home.intro}</p>
          <div className="hero-actions"><Link className="button" href={`/${locale}/kontakt`}>{t.home.primary}<span>↗</span></Link><a className="text-link" href="#services">{t.home.secondary}<span>↓</span></a></div>
        </div>
        <div className="hero-panel">
          <div className="market-line"><span>MARKET / STRATEGY</span><span>EDN — 2026</span></div>
          <div className="signal-visual"><div className="signal-ring r1"/><div className="signal-ring r2"/><div className="signal-ring r3"/><div className="signal-core">EDN</div></div>
          <div className="panel-caption"><span>Analyse</span><span>Strategie</span><span>Umsetzung</span></div>
        </div>
      </div>
      <div className="shell stats-row">{t.home.stats.map((s:any)=><div className="stat" key={s.value}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div>
    </section>

    <section id="services" className="section services-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.home.servicesEyebrow}</p><h2>{t.home.servicesTitle}</h2></div><p>{t.home.servicesText}</p></div><div className="services-grid">{services.map(([i,slug,s])=><ServiceCard key={slug} index={i} slug={slug} service={s} locale={locale}/>)}</div></div></section>

    <section className="section contrast-section"><div className="shell split"><div className="sticky-copy"><p className="eyebrow">{t.home.whyEyebrow}</p><h2>{t.home.whyTitle}</h2><p>{t.home.whyText}</p></div><div className="benefit-list">{t.home.benefits.map((b:any,i:number)=><article key={b.title}><span>0{i+1}</span><div><h3>{b.title}</h3><p>{b.text}</p></div></article>)}</div></div></section>

    <section id="process" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.home.processEyebrow}</p><h2>{t.home.processTitle}</h2></div></div><div className="process-grid">{t.home.process.map((p:any)=><article key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>

    <section className="section cta-section"><Noise/><div className="shell cta-inner"><p className="eyebrow">{t.home.ctaEyebrow}</p><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p><Link href={`/${locale}/kontakt`} className="button button-light">{t.home.primary}<span>↗</span></Link></div></section>
  </>
}
