import { ArrowUpRight, Flame, Gauge, Zap } from 'lucide-react'
import Link from 'next/link'

const icons={strom:Zap,gas:Flame,energiebeschaffung:Gauge} as const

export function ServiceCard({index,service,slug,locale}:{index:string;service:any;slug:string;locale:string}){
 const Icon=icons[slug as keyof typeof icons]??Gauge
 return <Link href={`/${locale}/leistungen/${slug}`} className="ref-service-card">
  <div className="ref-service-card-head"><span>{index}</span><Icon size={17} strokeWidth={1.5}/></div>
  <div className={`ref-service-visual ref-service-visual-${slug}`} aria-hidden="true"><i/><i/><i/><i/></div>
  <div className="ref-service-copy"><small>{service.eyebrow}</small><div><h3>{service.title}</h3><ArrowUpRight size={18} strokeWidth={1.5}/></div><p>{service.summary}</p></div>
 </Link>
}
