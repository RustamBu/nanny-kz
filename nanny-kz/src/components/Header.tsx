'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
        <span className="logo-sub">Алматы · с 1996</span>
      </a>
      <nav>
        <a href="#services">Персонал</a>
        <a href="#why">О нас</a>
        <a href="#process">Как работаем</a>
        <a href="#contact">Контакты</a>
        <button className="btn-nav" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={scrollToContact}>
          Позвонить
        </button>
      </nav>
    </header>
  )
}
