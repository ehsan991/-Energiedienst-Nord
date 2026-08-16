import type { Locale } from '@/i18n/locales'
import { getContent } from './index'
import { detailOverrides } from './detail-overrides'

function merge(base:any, patch:any):any {
  if (!patch) return base
  const out = {...base}
  for (const [key,value] of Object.entries(patch)) {
    out[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? merge(base?.[key] ?? {}, value)
      : value
  }
  return out
}

export function getResolvedContent(locale: Locale) {
  return merge(getContent(locale), detailOverrides[locale])
}
