import de from '@/content/de'
import en from '@/content/en'
import ContactForm from '@/components/ContactForm'

export default async function Contact({params}:{params:Promise<{locale:'de'|'en'}>}){
  const {locale}=await params
  const t=locale==='de'?de:en
  return <section className="subhero contact-page"><div className="shell contact-grid"><div><p className="eyebrow">{t.contact.eyebrow}</p><h1>{t.contact.title}</h1><p className="hero-lead">{t.contact.text}</p><div className="contact-meta"><span>info@energiedienst-nord.de</span><span>{t.contact.locationValue}</span></div></div><ContactForm locale={locale}/></div></section>
}
