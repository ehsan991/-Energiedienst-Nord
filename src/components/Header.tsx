import { buttonVariants } from '@heroui/styles'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Locale } from '@/i18n/locales'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'

type Props = { locale: Locale; t: any }

export function Header({ locale, t }: Props) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={`/${locale}`} className="brand" aria-label="Energiedienst Nord">
          <span className="brand-mark">EDN</span>
          <span className="brand-name">Energiedienst<br/>Nord</span>
        </Link>
        <nav className="desktop-nav">
          <a href={`/${locale}/#services`}>{t.nav.services}</a>
          <Link href={`/${locale}/unternehmen`}>{t.nav.company}</Link>
          <a href={`/${locale}/#process`}>{t.nav.process}</a>
          <Link href={`/${locale}/kontakt`}>{t.nav.contact}</Link>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <Link className={`${buttonVariants({ variant: 'primary' })} button button-small desktop-cta`} href={`/${locale}/kontakt`}>
            {t.nav.consultation}<ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
