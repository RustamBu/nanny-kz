'use client'

import Header from '@/components/Header'
import FadeUp from '@/components/FadeUp'
import ContactForm from '@/components/ContactForm'
import ScrollToContact from '@/components/ScrollToContact'
import { useLang } from '@/components/LanguageProvider'

const SERVICE_ICONS = ['👶', '🏠', '🎓', '👨‍🍳']

export default function Home() {
  const { t } = useLang()
  const tickerItems = [...t.ticker, ...t.ticker]
  const num = (i: number) => String(i + 1).padStart(2, '0')

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">{t.hero.tag}</div>
          <h1 className="hero-h1">
            {t.hero.h1[0]}<br/>{t.hero.h1[1]}<br/><em>{t.hero.h1[2]}</em>
          </h1>
          <p className="hero-p">{t.hero.p}</p>
          <div className="hero-ctas">
            <ScrollToContact label={t.hero.ctaPrimary} className="cta-primary" />
            <ScrollToContact label={t.hero.ctaGhost} className="cta-ghost" arrow />
          </div>
          <div className="hero-stats">
            <div><div className="stat-n">30</div><div className="stat-l">{t.hero.stats.years}</div></div>
            <div><div className="stat-n">10000+</div><div className="stat-l">{t.hero.stats.families}</div></div>
            <div><div className="stat-n">100%</div><div className="stat-l">{t.hero.stats.verified}</div></div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="section-tag">{t.services.tag}</div>
        <h2>{t.services.h2[0]}<br/>{t.services.h2[1]}</h2>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <FadeUp key={i}>
              <div className="service-card">
                <div className="service-num">{num(i)}</div>
                <div className="service-icon">{SERVICE_ICONS[i]}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="why" id="why">
        <div className="section-tag">{t.why.tag}</div>
        <h2>{t.why.h2[0]}<br/>{t.why.h2[1]}</h2>
        <div className="why-grid">
          {t.why.items.map((w, i) => (
            <FadeUp key={i}>
              <div className="why-item">
                <div className="why-num">{num(i)}</div>
                <div className="why-title">{w.title}</div>
                <p className="why-text">{w.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process">
        <div className="section-tag">{t.process.tag}</div>
        <h2>{t.process.h2[0]}<br/>{t.process.h2[1]}</h2>
        <div className="process-inner">
          {t.process.items.map((s, i) => (
            <FadeUp key={i}>
              <div className="step">
                <div className="step-dot">{i + 1}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div>
          <div className="section-tag">{t.contact.tag}</div>
          <h2 style={{ marginBottom: '36px' }}>{t.contact.h2[0]}<br/>{t.contact.h2[1]}</h2>
          <div>
            <div className="contact-item">
              <div className="contact-label">{t.contact.phone}</div>
              <a href="tel:+77772022028" className="contact-val">+7 777 202 2028</a><br/>
              <a href="tel:+77075022028" className="contact-val">+7 707 502 2028</a>
            </div>
            <div className="contact-item">
              <div className="contact-label">{t.contact.whatsapp}</div>
              <a href="https://wa.me/77772022028" className="contact-val">+7 777 202 2028</a>
            </div>
            <div className="contact-item">
              <div className="contact-label">{t.contact.email}</div>
              <a href="mailto:info@nanny.kz" className="contact-val">info@nanny.kz</a>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Агентство Няня</div>
            <div className="footer-brand-sub">{t.footer.brandSub}</div>
            <p className="footer-desc">{t.footer.desc}</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.staff}</div>
            <a href="#services">{t.services.items[0].name}</a>
            <a href="#services">{t.services.items[1].name}</a>
            <a href="#services">{t.services.items[2].name}</a>
            <a href="#services">{t.services.items[3].name}</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.company}</div>
            <a href="#why">{t.footer.about}</a>
            <a href="#why">{t.footer.guarantees}</a>
            <a href="#contact">{t.footer.forApplicants}</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.contacts}</div>
            <a href="tel:+77772022028">+7 777 202 2028</a>
            <a href="tel:+77075022028">+7 707 502 2028</a>
            <a href="mailto:info@nanny.kz">info@nanny.kz</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <div className="footer-socials">
            <a href="https://wa.me/77772022028" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://www.instagram.com/agentstvo.nanny/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}
