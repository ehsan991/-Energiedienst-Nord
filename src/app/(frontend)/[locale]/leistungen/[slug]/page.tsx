import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import de from '@/content/de'
import en from '@/content/en'

const map:any={strom:'electricity',gas:'gas',energiebeschaffung:'procurement'}
export default async function ServicePage({params}:{params:Promise<{locale:'de'|'en';slug:string}>}){
 const {locale,slug}=await params; const t=locale==='de'?de:en; const key=map[slug]; if(!key)notFound(); const s=(t.services as any)[key]
 return <><section className="subhero"><div className="shell narrow"><p className="eyebrow">{s.eyebrow}</p><h1>{s.title}</h1><p className="hero-lead">{s.summary}</p></div></section><section className="section"><div className="shell service-detail"><div><p className="eyebrow">{locale==='de'?'Leistungsbausteine':'Service modules'}</p><h2>{locale==='de'?'Klar strukturiert. Individuell auf Ihren Bedarf abgestimmt.':'Clearly structured. Tailored to your requirements.'}</h2></div><div className="point-list">{s.points.map((p:string,i:number)=><div key={p}><span>0{i+1}</span><strong>{p}</strong></div>)}</div></div></section><section className="section mini-cta"><div className="shell mini-cta-inner"><h2>{locale==='de'?'Welche Beschaffungsstrategie passt zu Ihrem Unternehmen?':'Which procurement strategy fits your business?'}</h2><Link className="button" href={`/${locale}/kontakt`}>{locale==='de'?'Beratung anfragen':'Request consultation'}<ArrowUpRight size={17} strokeWidth={1.7}/></Link></div></section></>
}
