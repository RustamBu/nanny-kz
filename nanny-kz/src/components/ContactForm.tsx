'use client'

import { useState } from 'react'
import { useLang } from '@/components/LanguageProvider'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const { t } = useLang()
  const f = t.form
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value.trim(),
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLInputElement).value.trim(),
    }

    const newErrors: Record<string, boolean> = {}
    if (!data.name)    newErrors.name = true
    if (!data.phone)   newErrors.phone = true
    if (!data.service) newErrors.service = true
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setErrors({})

    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setState('success')
      form.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return <div className="form-success">{f.success}</div>
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <input
            name="name"
            type="text"
            placeholder={f.name}
            className={errors.name ? 'error' : ''}
          />
        </div>
        <div className="field">
          <input
            name="phone"
            type="tel"
            placeholder={f.phone}
            className={errors.phone ? 'error' : ''}
          />
        </div>
      </div>
      <div className="field">
        <select name="service" className={errors.service ? 'error' : ''} defaultValue="">
          <option value="" disabled>{f.service}</option>
          {f.serviceOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <input
          name="message"
          type="text"
          placeholder={f.message}
        />
      </div>

      {state === 'error' && <div className="form-error-msg">{f.error}</div>}

      <button className="btn-submit" type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? f.sending : f.submit}
      </button>
      <p className="form-note">{f.note}</p>
    </form>
  )
}
