'use client'

import { Languages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { localeLabels, locales, type Locale } from '@/i18n/locales'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const router = useRouter()

  function changeLocale(next: string) {
    const parts = pathname.split('/')
    parts[1] = next
    router.push(parts.join('/') || `/${next}`)
  }

  return (
    <label className="language-switcher" aria-label="Language">
      <Languages size={16} strokeWidth={1.7} aria-hidden="true" />
      <select value={locale} onChange={(event) => changeLocale(event.target.value)}>
        {locales.map((code) => <option key={code} value={code}>{localeLabels[code].native}</option>)}
      </select>
    </label>
  )
}
