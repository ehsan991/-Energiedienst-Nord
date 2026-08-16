import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'
import { getContent } from '@/content'
import type { Locale } from './locales'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? (requested as Locale)
    : (routing.defaultLocale as Locale)

  return {
    locale,
    messages: getContent(locale),
  }
})
