'use client'

import { FormEvent, useState } from 'react'

type Props = { locale: 'de' | 'en' }

export default function ContactForm({ locale }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const de = locale === 'de'

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())

    const response = await fetch('/api/contact-submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, language: locale }),
    })

    if (response.ok) {
      event.currentTarget.reset()
      setState('success')
    } else setState('error')
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label><span>{de ? 'Name' : 'Name'}</span><input name="name" required /></label>
        <label><span>{de ? 'Unternehmen' : 'Company'}</span><input name="company" /></label>
      </div>
      <div className="form-row">
        <label><span>E-Mail</span><input name="email" type="email" required /></label>
        <label><span>{de ? 'Telefon' : 'Phone'}</span><input name="phone" /></label>
      </div>
      <label><span>{de ? 'Betreff' : 'Subject'}</span><input name="subject" required /></label>
      <label><span>{de ? 'Nachricht' : 'Message'}</span><textarea name="message" rows={6} required /></label>
      <button className="button" disabled={state === 'sending'} type="submit">
        {state === 'sending' ? (de ? 'Wird gesendet…' : 'Sending…') : (de ? 'Nachricht senden' : 'Send message')}
      </button>
      {state === 'success' && <p className="form-status">{de ? 'Vielen Dank. Wir melden uns bei Ihnen.' : 'Thank you. We will get back to you.'}</p>}
      {state === 'error' && <p className="form-status">{de ? 'Das hat leider nicht funktioniert. Bitte versuchen Sie es erneut.' : 'Something went wrong. Please try again.'}</p>}
    </form>
  )
}
