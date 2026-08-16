import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import de from '@/content/de'
import en from '@/content/en'
import '../../globals.css'
import '../../heroui.css'
import '../../energy-services.css'

export function generateStaticParams() { return routing.locales.map((locale) => ({ locale })) }

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{locale: string}> }) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const messages = await getMessages()
  const t = locale === 'de' ? de : en

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale as 'de'|'en'} t={t} />
            <main>{children}</main>
            <Footer locale={locale as 'de'|'en'} t={t} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
