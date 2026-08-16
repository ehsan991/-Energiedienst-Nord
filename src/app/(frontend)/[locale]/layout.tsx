import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { rtlLocales, type Locale } from '@/i18n/locales'
import { getContent } from '@/content'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '../../globals.css'
import '../../heroui.css'
import '../../energy-services.css'
import '../../multilingual.css'

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })) }

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{locale: string}> }) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const typedLocale = locale as Locale
  const messages = await getMessages()
  const t = getContent(typedLocale)
  const dir = rtlLocales.includes(typedLocale) ? 'rtl' : 'ltr'
  return <html lang={locale} dir={dir} suppressHydrationWarning><body><ThemeProvider><NextIntlClientProvider messages={messages}><Header locale={typedLocale} t={t}/><main>{children}</main><Footer locale={typedLocale} t={t}/></NextIntlClientProvider></ThemeProvider></body></html>
}
