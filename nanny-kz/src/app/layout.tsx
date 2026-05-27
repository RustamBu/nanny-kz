import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Агентство Няня — Домашний персонал · Алматы',
  description: 'Проверенные няни, домработницы, гувернантки и повара в Алматы. Работаем с 1996 года. Медицинский контроль, проверка МВД, гарантия замены.',
  keywords: 'няня алматы, домработница алматы, агентство няня, домашний персонал казахстан',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
