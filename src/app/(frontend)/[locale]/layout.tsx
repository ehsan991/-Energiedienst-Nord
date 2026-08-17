import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Vazirmatn, Noto_Sans_SC, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_Devanagari } from 'next/font/google'
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
import '../../projection.css'
import '../../ref-hero.css'
import '../../ref-dashboard.css'
import '../../ref-services.css'
import '../../ref-services-visuals.css'
import '../../ref-network.css'
import '../../ref-process.css'

const vazirmatn=Vazirmatn({subsets:['arabic'],display:'swap',variable:'--font-vazirmatn'})
const notoSansSC=Noto_Sans_SC({display:'swap',preload:false,variable:'--font-noto-sc'})
const notoSansJP=Noto_Sans_JP({display:'swap',preload:false,variable:'--font-noto-jp'})
const notoSansKR=Noto_Sans_KR({display:'swap',preload:false,variable:'--font-noto-kr'})
const notoSansDevanagari=Noto_Sans_Devanagari({display:'swap',preload:false,variable:'--font-noto-devanagari'})
const localeFontClasses:Partial<Record<Locale,string>>={fa:vazirmatn.className,ar:vazirmatn.className,zh:notoSansSC.className,ja:notoSansJP.className,ko:notoSansKR.className,hi:notoSansDevanagari.className}

export function generateStaticParams(){return routing.locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}){
 const {locale}=await params
 if(!hasLocale(routing.locales,locale))notFound()
 const typedLocale=locale as Locale
 const messages=await getMessages(); const t=getContent(typedLocale)
 const dir=rtlLocales.includes(typedLocale)?'rtl':'ltr'
 return <html lang={locale} dir={dir} suppressHydrationWarning><body className={localeFontClasses[typedLocale]}><ThemeProvider><NextIntlClientProvider messages={messages}><Header locale={typedLocale} t={t}/><main>{children}</main><Footer locale={typedLocale} t={t}/></NextIntlClientProvider></ThemeProvider></body></html>
}
