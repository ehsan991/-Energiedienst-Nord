export const locales = ['de','en','fa','ar','fr','es','zh','ja','ko','hi','tr','pl','ru','uk','it'] as const
export type Locale = (typeof locales)[number]

export const rtlLocales: Locale[] = ['fa','ar']

export const localeLabels: Record<Locale, { native: string; short: string }> = {
  de: { native: 'Deutsch', short: 'DE' },
  en: { native: 'English', short: 'EN' },
  fa: { native: 'فارسی', short: 'FA' },
  ar: { native: 'العربية', short: 'AR' },
  fr: { native: 'Français', short: 'FR' },
  es: { native: 'Español', short: 'ES' },
  zh: { native: '中文', short: '中文' },
  ja: { native: '日本語', short: '日本' },
  ko: { native: '한국어', short: '한국' },
  hi: { native: 'हिन्दी', short: 'HI' },
  tr: { native: 'Türkçe', short: 'TR' },
  pl: { native: 'Polski', short: 'PL' },
  ru: { native: 'Русский', short: 'RU' },
  uk: { native: 'Українська', short: 'UK' },
  it: { native: 'Italiano', short: 'IT' },
}
