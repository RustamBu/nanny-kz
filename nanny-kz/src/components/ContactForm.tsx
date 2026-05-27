'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
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
    return (
      <div className="form-success">
        ✓ Заявка отправлена. Мы позвоним вам в течение одного рабочего дня.
      </div>
    )
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <input
            name="name"
            type="text"
            placeholder="Ваше имя *"
            className={errors.name ? 'error' : ''}
          />
        </div>
        <div className="field">
          <input
            name="phone"
            type="tel"
            placeholder="Номер телефона *"
            className={errors.phone ? 'error' : ''}
          />
        </div>
      </div>
      <div className="field">
        <select name="service" className={errors.service ? 'error' : ''} defaultValue="">
          <option value="" disabled>Кто нужен? *</option>
          <option>Няня</option>
          <option>Домработница</option>
          <option>Гувернантка</option>
          <option>Повар</option>
          <option>Другое</option>
        </select>
      </div>
      <div className="field">
        <input
          name="message"
          type="text"
          placeholder="Дополнительные пожелания (необязательно)"
        />
      </div>

      {state === 'error' && (
        <div className="form-error-msg">
          Что-то пошло не так. Позвоните нам напрямую: +7 777 202 2028
        </div>
      )}

      <button className="btn-submit" type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
      </button>
      <p className="form-note">* Обязательные поля. Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
    </form>
  )
}
