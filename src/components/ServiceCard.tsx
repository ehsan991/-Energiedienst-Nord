import { ArrowUpRight, Flame, Gauge, Zap } from 'lucide-react'
import Link from 'next/link'

const icons = {
  strom: Zap,
  gas: Flame,
  energiebeschaffung: Gauge,
} as const

export function ServiceCard({ index, service, slug, locale }: { index: string; service: any; slug: string; locale: string }) {
  const Icon = icons[slug as keyof typeof icons] ?? Gauge
  const featured = slug === 'energiebeschaffung'

  return (
    <Link href={`/${locale}/leistungen/${slug}`} className={`service-card ${featured ? 'service-card-featured' : ''}`}>
      <div className="service-card-top">
        <span>{index}</span>
        <span className="service-card-icon"><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
      </div>
      <div className="service-card-visual" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="service-card-content">
        <p className="card-eyebrow">{service.eyebrow}</p>
        <div className="service-card-title-row">
          <h3>{service.title}</h3>
          <ArrowUpRight className="arrow" size={22} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <p>{service.summary}</p>
      </div>
    </Link>
  )
}
