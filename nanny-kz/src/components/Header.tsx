'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/components/LanguageProvider'
import { LANGS } from '@/lib/i18n'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="logo">
        <span className="logo-name">Агентство Няня</span>
        <span className="logo-sub">{t.logoSub}</span>
      </a>
      <nav>
        <a href="#services">{t.nav.services}</a>
        <a href="#why">{t.nav.why}</a>
        <a href="#process">{t.nav.process}</a>
        <a href="#contact">{t.nav.contacts}</a>
        <button className="btn-nav" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={scrollToContact}>
          {t.nav.call}
        </button>
      </nav>
      <div className="lang-switch" role="group" aria-label="Language">
        {LANGS.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            className={`lang-btn${lang === code ? ' active' : ''}`}
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  )
}
