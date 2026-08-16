'use client'

import { Button, Input, Label, TextArea, TextField } from '@heroui/react'
import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import type { Locale } from '@/i18n/locales'

type Props = { locale: Locale }
const labels: Record<Locale, any> = {
  de:{company:'Unternehmen',phone:'Telefon',subject:'Betreff',message:'Nachricht',send:'Nachricht senden',sending:'Wird gesendet…',success:'Vielen Dank. Wir melden uns bei Ihnen.',error:'Das hat leider nicht funktioniert. Bitte versuchen Sie es erneut.'},
  en:{company:'Company',phone:'Phone',subject:'Subject',message:'Message',send:'Send message',sending:'Sending…',success:'Thank you. We will get back to you.',error:'Something went wrong. Please try again.'},
  fa:{company:'شرکت',phone:'تلفن',subject:'موضوع',message:'پیام',send:'ارسال پیام',sending:'در حال ارسال…',success:'سپاسگزاریم. با شما تماس می‌گیریم.',error:'ارسال انجام نشد. دوباره تلاش کنید.'},
  ar:{company:'الشركة',phone:'الهاتف',subject:'الموضوع',message:'الرسالة',send:'إرسال الرسالة',sending:'جارٍ الإرسال…',success:'شكرًا لك. سنتواصل معك.',error:'حدث خطأ. يرجى المحاولة مرة أخرى.'},
  fr:{company:'Entreprise',phone:'Téléphone',subject:'Objet',message:'Message',send:'Envoyer',sending:'Envoi…',success:'Merci. Nous vous contacterons.',error:'Une erreur est survenue. Veuillez réessayer.'},
  es:{company:'Empresa',phone:'Teléfono',subject:'Asunto',message:'Mensaje',send:'Enviar mensaje',sending:'Enviando…',success:'Gracias. Nos pondremos en contacto contigo.',error:'Algo salió mal. Inténtalo de nuevo.'},
  zh:{company:'公司',phone:'电话',subject:'主题',message:'留言',send:'发送',sending:'发送中…',success:'谢谢，我们会尽快联系您。',error:'发送失败，请重试。'},
  ja:{company:'会社名',phone:'電話',subject:'件名',message:'メッセージ',send:'送信',sending:'送信中…',success:'ありがとうございます。折り返しご連絡します。',error:'送信できませんでした。もう一度お試しください。'},
  ko:{company:'회사',phone:'전화',subject:'제목',message:'메시지',send:'메시지 보내기',sending:'전송 중…',success:'감사합니다. 곧 연락드리겠습니다.',error:'오류가 발생했습니다. 다시 시도해 주세요.'},
  hi:{company:'कंपनी',phone:'फ़ोन',subject:'विषय',message:'संदेश',send:'संदेश भेजें',sending:'भेजा जा रहा है…',success:'धन्यवाद। हम आपसे संपर्क करेंगे।',error:'कुछ गलत हुआ। फिर से प्रयास करें।'},
  tr:{company:'Şirket',phone:'Telefon',subject:'Konu',message:'Mesaj',send:'Mesaj gönder',sending:'Gönderiliyor…',success:'Teşekkürler. Sizinle iletişime geçeceğiz.',error:'Bir hata oluştu. Lütfen tekrar deneyin.'},
  pl:{company:'Firma',phone:'Telefon',subject:'Temat',message:'Wiadomość',send:'Wyślij wiadomość',sending:'Wysyłanie…',success:'Dziękujemy. Skontaktujemy się z Tobą.',error:'Coś poszło nie tak. Spróbuj ponownie.'},
  ru:{company:'Компания',phone:'Телефон',subject:'Тема',message:'Сообщение',send:'Отправить',sending:'Отправка…',success:'Спасибо. Мы свяжемся с вами.',error:'Произошла ошибка. Попробуйте ещё раз.'},
  uk:{company:'Компанія',phone:'Телефон',subject:'Тема',message:'Повідомлення',send:'Надіслати',sending:'Надсилання…',success:'Дякуємо. Ми зв’яжемося з вами.',error:'Сталася помилка. Спробуйте ще раз.'},
  it:{company:'Azienda',phone:'Telefono',subject:'Oggetto',message:'Messaggio',send:'Invia messaggio',sending:'Invio…',success:'Grazie. Ti contatteremo.',error:'Si è verificato un errore. Riprova.'},
}

export default function ContactForm({ locale }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const l = labels[locale]
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending')
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries())
    try { const response = await fetch('/api/contact-submissions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,language:locale})}); setState(response.ok?'success':'error'); if(response.ok) event.currentTarget.reset() } catch { setState('error') }
  }
  const fieldClass='flex flex-col gap-2', labelClass='text-[10px] font-medium uppercase tracking-[.13em] text-[var(--muted)]', inputClass='w-full rounded-[14px] border border-[var(--line)] bg-[var(--bg)] px-4 py-3.5 text-[var(--text)] shadow-none outline-none transition'
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><TextField className={fieldClass} name="name" isRequired><Label className={labelClass}>Name</Label><Input className={inputClass}/></TextField><TextField className={fieldClass} name="company"><Label className={labelClass}>{l.company}</Label><Input className={inputClass}/></TextField></div>
    <div className="form-row"><TextField className={fieldClass} name="email" type="email" isRequired><Label className={labelClass}>E-Mail</Label><Input className={inputClass}/></TextField><TextField className={fieldClass} name="phone" type="tel"><Label className={labelClass}>{l.phone}</Label><Input className={inputClass}/></TextField></div>
    <TextField className={fieldClass} name="subject" isRequired><Label className={labelClass}>{l.subject}</Label><Input className={inputClass}/></TextField>
    <TextField className={fieldClass} name="message" isRequired><Label className={labelClass}>{l.message}</Label><TextArea rows={6} className={`${inputClass} min-h-36 resize-y`}/></TextField>
    <Button type="submit" variant="primary" isPending={state==='sending'} className="button"><Send size={16}/>{state==='sending'?l.sending:l.send}</Button>
    {state==='success'&&<p className="form-status">{l.success}</p>}{state==='error'&&<p className="form-status">{l.error}</p>}
  </form>
}
