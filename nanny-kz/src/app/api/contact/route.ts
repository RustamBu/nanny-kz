import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, service, message } = body

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Заполните обязательные поля' }, { status: 400 })
    }

    const to = process.env.CONTACT_EMAIL_TO ?? 'info@nanny.kz'
    const from = process.env.CONTACT_EMAIL_FROM ?? 'site@nanny.kz'

    await resend.emails.send({
      from,
      to,
      subject: `Новая заявка с сайта — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; color: #2e4030;">
          <div style="background: #2e4030; padding: 24px 32px;">
            <h1 style="color: #f5f7f2; font-size: 20px; margin: 0; font-weight: 400;">Агентство Няня — новая заявка</h1>
          </div>
          <div style="padding: 32px; background: #f5f7f2; border: 1px solid #d8e6d0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6a8070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Имя</td>
                <td style="padding: 10px 0; font-size: 15px; color: #2e4030;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #d8e6d0;">
                <td style="padding: 10px 0; color: #6a8070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Телефон</td>
                <td style="padding: 10px 0; font-size: 15px; color: #2e4030;"><a href="tel:${phone}" style="color: #2e4030;">${phone}</a></td>
              </tr>
              <tr style="border-top: 1px solid #d8e6d0;">
                <td style="padding: 10px 0; color: #6a8070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Нужен</td>
                <td style="padding: 10px 0; font-size: 15px; color: #2e4030;">${service}</td>
              </tr>
              ${message ? `
              <tr style="border-top: 1px solid #d8e6d0;">
                <td style="padding: 10px 0; color: #6a8070; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Пожелания</td>
                <td style="padding: 10px 0; font-size: 15px; color: #2e4030;">${message}</td>
              </tr>` : ''}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #e8ede2; font-size: 11px; color: #6a8070;">
            Заявка отправлена с сайта nanny.kz
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] send error:', err)
    return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 })
  }
}
