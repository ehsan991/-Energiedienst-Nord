'use client'

import { Button, Input, Label, TextArea, TextField } from '@heroui/react'
import { Send } from 'lucide-react'
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

    try {
      const response = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, language: locale }),
      })

      if (response.ok) {
        event.currentTarget.reset()
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const fieldClass = 'flex flex-col gap-2'
  const labelClass = 'text-[10px] font-medium uppercase tracking-[.13em] text-[var(--muted)]'
  const inputClass = 'w-full rounded-[14px] border border-[var(--line)] bg-[var(--bg)] px-4 py-3.5 text-[var(--text)] shadow-none outline-none transition focus:border-[color-mix(in_srgb,var(--text)_45%,transparent)]'

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <TextField className={fieldClass} name="name" isRequired>
          <Label className={labelClass}>Name</Label>
          <Input className={inputClass} />
        </TextField>
        <TextField className={fieldClass} name="company">
          <Label className={labelClass}>{de ? 'Unternehmen' : 'Company'}</Label>
          <Input className={inputClass} />
        </TextField>
      </div>

      <div className="form-row">
        <TextField className={fieldClass} name="email" type="email" isRequired>
          <Label className={labelClass}>E-Mail</Label>
          <Input className={inputClass} />
        </TextField>
        <TextField className={fieldClass} name="phone" type="tel">
          <Label className={labelClass}>{de ? 'Telefon' : 'Phone'}</Label>
          <Input className={inputClass} />
        </TextField>
      </div>

      <TextField className={fieldClass} name="subject" isRequired>
        <Label className={labelClass}>{de ? 'Betreff' : 'Subject'}</Label>
        <Input className={inputClass} />
      </TextField>

      <TextField className={fieldClass} name="message" isRequired>
        <Label className={labelClass}>{de ? 'Nachricht' : 'Message'}</Label>
        <TextArea rows={6} className={`${inputClass} min-h-36 resize-y`} />
      </TextField>

      <Button
        type="submit"
        variant="primary"
        isPending={state === 'sending'}
        className="button"
      >
        <Send size={16} strokeWidth={1.7} />
        {state === 'sending' ? (de ? 'Wird gesendet…' : 'Sending…') : (de ? 'Nachricht senden' : 'Send message')}
      </Button>

      {state === 'success' && <p className="form-status">{de ? 'Vielen Dank. Wir melden uns bei Ihnen.' : 'Thank you. We will get back to you.'}</p>}
      {state === 'error' && <p className="form-status">{de ? 'Das hat leider nicht funktioniert. Bitte versuchen Sie es erneut.' : 'Something went wrong. Please try again.'}</p>}
    </form>
  )
}
