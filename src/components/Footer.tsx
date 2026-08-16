import Link from 'next/link'
import type { Locale } from '@/i18n/locales'

export function Footer({ locale, t }: { locale: Locale; t: any }) {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">EDN</span><span className="brand-name">Energiedienst<br/>Nord</span></div><p>{t.footer.claim}</p></div>
        <div className="footer-links"><Link href={`/${locale}/#services`}>{t.nav.services}</Link><Link href={`/${locale}/unternehmen`}>{t.nav.company}</Link><Link href={`/${locale}/kontakt`}>{t.nav.contact}</Link></div>
        <div className="footer-links"><span>{t.footer.legal}</span><a href="#">{t.footer.imprint}</a><a href="#">{t.footer.privacy}</a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Energiedienst Nord</span><span>Independent energy advisory · Northern Germany</span></div>
    </footer>
  )
}
