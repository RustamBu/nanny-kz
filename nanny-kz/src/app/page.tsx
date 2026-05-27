import Header from '@/components/Header'
import FadeUp from '@/components/FadeUp'
import ContactForm from '@/components/ContactForm'
import ScrollToContact from '@/components/ScrollToContact'

const TICKER_ITEMS = [
  'Проверка по линии МВД',
  'Медицинское освидетельствование',
  'Гарантия замены персонала',
  'Работаем с 1996 года',
  'Индивидуальный подбор',
  'Выезд в другой город и страну',
]

const SERVICES = [
  { num: '01', icon: '👶', name: 'Няня',        desc: 'Подбираем с учётом возраста ребёнка, его характера и привычек вашей семьи. Обязательный опыт от 3 лет.' },
  { num: '02', icon: '🏠', name: 'Домработница', desc: 'Опытные помощницы по хозяйству, знающие все нюансы работы по дому и современные средства уборки.' },
  { num: '03', icon: '🎓', name: 'Гувернантка',  desc: 'С педагогическим образованием. Подготовка к школе, помощь с уроками и развивающие занятия.' },
  { num: '04', icon: '👨‍🍳', name: 'Повар',       desc: 'Домашняя кухня и торжественные приёмы. Ежедневное питание и банкеты с сервировкой стола.' },
]

const WHY = [
  { num: '01', title: 'Медицинский контроль', text: 'Весь персонал проходит обязательное медицинское освидетельствование перед трудоустройством.' },
  { num: '02', title: 'Проверка МВД',          text: 'Проверяем по базам МВД. Вы точно знаете, кого пускаете в дом к своей семье.' },
  { num: '03', title: 'Знаем о персонале всё', text: 'Многие сотрудники работают в семьях по 3–10 лет, затем возвращаются. У нас их полная история работы.' },
  { num: '04', title: 'Гарантия замены',        text: 'Если сотрудник не подошёл — заменим без дополнительных затрат с вашей стороны.' },
]

const STEPS = [
  { n: '1', title: 'Заявка',  desc: 'Звоните или пишите. Рассказываете о семье, ребёнке и своих требованиях.' },
  { n: '2', title: 'Подбор',  desc: 'Работаем индивидуально — изучаем базу и выбираем подходящих кандидатов.' },
  { n: '3', title: 'Встреча', desc: 'Организуем собеседование. Вы выбираете того, кто понравился.' },
  { n: '4', title: 'Договор', desc: 'Заключаем договор и гарантируем замену, если что-то пойдёт не так.' },
]

export default function Home() {
  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Домашний персонал · Алматы</div>
          <h1 className="hero-h1">
            Надёжные люди<br/>для вашего<br/><em>дома и семьи</em>
          </h1>
          <p className="hero-p">
            Тщательно отобранные и проверенные няни, домработницы, повара и гувернантки.
            Индивидуальный подход к каждой семье — с 1996 года.
          </p>
          <div className="hero-ctas">
            <ScrollToContact label="Подобрать персонал" className="cta-primary" />
            <ScrollToContact label="Позвонить нам" className="cta-ghost" arrow />
          </div>
          <div className="hero-stats">
            <div><div className="stat-n">30</div><div className="stat-l">лет на рынке</div></div>
            <div><div className="stat-n">1000+</div><div className="stat-l">семей доверились нам</div></div>
            <div><div className="stat-n">100%</div><div className="stat-l">проверенный персонал</div></div>
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
        <div className="section-tag">Что мы предлагаем</div>
        <h2>Персонал для<br/>любой задачи</h2>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <FadeUp key={s.num}>
              <div className="service-card">
                <div className="service-num">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="why" id="why">
        <div className="section-tag">Почему нам доверяют</div>
        <h2>30 лет на рынке —<br/>это не случайность</h2>
        <div className="why-grid">
          {WHY.map((w) => (
            <FadeUp key={w.num}>
              <div className="why-item">
                <div className="why-num">{w.num}</div>
                <div className="why-title">{w.title}</div>
                <p className="why-text">{w.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process">
        <div className="section-tag">Как мы работаем</div>
        <h2>Четыре шага<br/>до результата</h2>
        <div className="process-inner">
          {STEPS.map((s) => (
            <FadeUp key={s.n}>
              <div className="step">
                <div className="step-dot">{s.n}</div>
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
          <div className="section-tag">Связаться с нами</div>
          <h2 style={{ marginBottom: '36px' }}>Расскажите<br/>о вашей семье</h2>
          <div>
            <div className="contact-item">
              <div className="contact-label">Телефон</div>
              <a href="tel:+77772022028" className="contact-val">+7 777 202 2028</a><br/>
              <a href="tel:+77075022028" className="contact-val">+7 707 502 2028</a>
            </div>
            <div className="contact-item">
              <div className="contact-label">WhatsApp</div>
              <a href="https://wa.me/77772022028" className="contact-val">+7 777 202 2028</a>
            </div>
            <div className="contact-item">
              <div className="contact-label">Email</div>
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
            <div className="footer-brand-sub">Алматы · с 1996</div>
            <p className="footer-desc">Агентство домашнего персонала. Работаем с семьями Алматы и Казахстана уже 30 лет.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Персонал</div>
            <a href="#services">Няня</a>
            <a href="#services">Домработница</a>
            <a href="#services">Гувернантка</a>
            <a href="#services">Повар</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Компания</div>
            <a href="#why">О нас</a>
            <a href="#why">Гарантии</a>
            <a href="#contact">Для соискателей</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Контакты</div>
            <a href="tel:+77772022028">+7 777 202 2028</a>
            <a href="tel:+77075022028">+7 707 502 2028</a>
            <a href="mailto:info@nanny.kz">info@nanny.kz</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Агентство Няня · Алматы, Казахстан</span>
          <div className="footer-socials">
            <a href="https://wa.me/77772022028" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://www.instagram.com/agentstvo.nanny/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  )
}
