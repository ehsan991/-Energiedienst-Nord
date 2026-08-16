import Link from 'next/link'

export function ServiceCard({ index, service, slug, locale }: { index: string; service: any; slug: string; locale: string }) {
  return (
    <Link href={`/${locale}/leistungen/${slug}`} className="service-card">
      <div className="service-card-top"><span>{index}</span><span className="arrow">↗</span></div>
      <div>
        <p className="card-eyebrow">{service.eyebrow}</p>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
    </Link>
  )
}
