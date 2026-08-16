import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getContent } from '@/content'
import type { Locale } from '@/i18n/locales'

const map:any={strom:'electricity',gas:'gas',energiebeschaffung:'procurement'}
export default async function ServicePage({params}:{params:Promise<{locale:Locale;slug:string}>}){
 const {locale,slug}=await params; const t=getContent(locale); const key=map[slug]; if(!key)notFound(); const s=(t.services as any)[key]
 return <><section className="subhero"><div className="shell narrow"><p className="eyebrow">{s.eyebrow}</p><h1>{s.title}</h1><p className="hero-lead">{s.summary}</p></div></section><section className="section"><div className="shell service-detail"><div><p className="eyebrow">{t.nav.services}</p><h2>{s.title}</h2></div><div className="point-list">{s.points.map((p:string,i:number)=><div key={p}><span>0{i+1}</span><strong>{p}</strong></div>)}</div></div></section><section className="section mini-cta"><div className="shell mini-cta-inner"><h2>{t.home.ctaTitle}</h2><Link className="button" href={`/${locale}/kontakt`}>{t.nav.consultation}<ArrowUpRight size={17} strokeWidth={1.7}/></Link></div></section></>
}
