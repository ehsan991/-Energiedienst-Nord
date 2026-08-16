import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Check, Network } from 'lucide-react'
import { getResolvedContent } from '@/content/resolved'
import type { Locale } from '@/i18n/locales'
import { ServiceCard } from '@/components/ServiceCard'
import { Noise } from '@/components/Noise'

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = getResolvedContent(locale)
  const services = [['01','energiebeschaffung',t.services.procurement],['02','strom',t.services.electricity],['03','gas',t.services.gas]] as const
  return <>
    <section className="hero"><Noise/><div className="hero-orb orb-a"/><div className="hero-orb orb-b"/><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow">{t.home.eyebrow}</p><h1>{t.home.title}</h1><p className="hero-lead">{t.home.intro}</p><div className="hero-actions"><Link className="button" href={`/${locale}/kontakt`}>{t.home.primary}<ArrowUpRight size={17}/></Link><a className="text-link" href="#services">{t.home.secondary}<ArrowDown size={16}/></a></div></div><div className="hero-panel"><div className="market-line"><span>ENERGY / STRATEGY</span><span>EDN — 2026</span></div><div className="signal-visual"><div className="signal-ring r1"/><div className="signal-ring r2"/><div className="signal-ring r3"/><div className="signal-core">EDN</div></div><div className="panel-caption"><span>Analyse</span><span>Strategie</span><span>Beschaffung</span></div></div></div></section>
    <section className="trust-section"><div className="shell trust-grid"><div className="trust-heading"><p className="eyebrow">{t.home.trustEyebrow}</p><h2>{t.home.trustTitle}</h2></div><div className="trust-copy"><p>{t.home.trustText1}</p><p>{t.home.trustText2}</p><strong>{t.home.trustClaim}</strong></div></div><div className="shell trust-principles">{t.home.trustPrinciples.map((item:string)=><div key={item}><Check size={16}/><span>{item}</span></div>)}</div></section>
    <section className="provider-section"><div className="shell provider-card"><div className="provider-number"><Network size={26} strokeWidth={1.4}/><strong>30+</strong><span>{t.home.providerMetric}</span></div><div className="provider-copy"><p className="eyebrow">{t.home.providerEyebrow}</p><h2>{t.home.providerTitle}</h2><p>{t.home.providerText}</p></div></div></section>
    <section id="services" className="section services-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.home.servicesEyebrow}</p><h2>{t.home.servicesTitle}</h2></div><p>{t.home.servicesText}</p></div><div className="services-grid">{services.map(([i,slug,s])=><ServiceCard key={slug} index={i} slug={slug} service={s} locale={locale}/>)}</div></div></section>
    <section className="section contrast-section"><div className="shell split"><div className="sticky-copy"><p className="eyebrow">{t.home.whyEyebrow}</p><h2>{t.home.whyTitle}</h2><p>{t.home.whyText}</p></div><div className="benefit-list">{t.home.benefits.map((b:any,i:number)=><article key={b.title}><span>0{i+1}</span><div><h3>{b.title}</h3><p>{b.text}</p></div></article>)}</div></div></section>
    <section id="process" className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.home.processEyebrow}</p><h2>{t.home.processTitle}</h2></div></div><div className="process-grid">{t.home.process.map((p:any)=><article key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
    <section className="section cta-section"><Noise/><div className="shell cta-inner"><p className="eyebrow">{t.home.ctaEyebrow}</p><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p><Link href={`/${locale}/kontakt`} className="button button-light">{t.home.primary}<ArrowUpRight size={17}/></Link></div></section>
  </>
}
