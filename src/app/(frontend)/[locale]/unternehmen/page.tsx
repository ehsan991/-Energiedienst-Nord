import { getContent } from '@/content'
import type { Locale } from '@/i18n/locales'

export default async function Company({params}:{params:Promise<{locale:Locale}>}){
 const {locale}=await params; const t=getContent(locale)
 return <><section className="subhero"><div className="shell narrow"><p className="eyebrow">{t.company.eyebrow}</p><h1>{t.company.title}</h1><p className="hero-lead">{t.company.lead}</p></div></section><section className="section"><div className="shell company-grid"><div className="company-copy"><p>{t.company.text1}</p><p>{t.company.text2}</p></div><div className="principles">{t.company.values.map((v:string,i:number)=><div key={v}><span>0{i+1}</span><strong>{v}</strong></div>)}</div></div></section></>
}
