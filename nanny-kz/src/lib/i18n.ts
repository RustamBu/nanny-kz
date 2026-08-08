export type Lang = 'ru' | 'kk' | 'en'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KZ' },
  { code: 'en', label: 'EN' },
]

export type Dict = {
  htmlLang: string
  meta: { title: string; description: string }
  nav: { services: string; why: string; process: string; contacts: string; call: string }
  logoSub: string
  hero: {
    tag: string
    h1: [string, string, string]
    p: string
    ctaPrimary: string
    ctaGhost: string
    stats: { years: string; families: string; verified: string }
  }
  ticker: string[]
  services: { tag: string; h2: [string, string]; items: { name: string; desc: string }[] }
  why: { tag: string; h2: [string, string]; items: { title: string; text: string }[] }
  process: { tag: string; h2: [string, string]; items: { title: string; desc: string }[] }
  contact: {
    tag: string
    h2: [string, string]
    phone: string
    whatsapp: string
    email: string
  }
  form: {
    name: string
    phone: string
    service: string
    serviceOptions: string[]
    message: string
    submit: string
    sending: string
    note: string
    success: string
    error: string
  }
  footer: {
    brandSub: string
    desc: string
    staff: string
    company: string
    contacts: string
    about: string
    guarantees: string
    forApplicants: string
    rights: string
  }
}

const ru: Dict = {
  htmlLang: 'ru',
  meta: {
    title: 'Агентство Няня — Домашний персонал · Алматы',
    description:
      'Проверенные няни, домработницы, гувернантки и повара в Алматы. Работаем с 1996 года. Медицинский контроль, проверка МВД, гарантия замены.',
  },
  nav: { services: 'Персонал', why: 'О нас', process: 'Как работаем', contacts: 'Контакты', call: 'Позвонить' },
  logoSub: 'Алматы · с 1996',
  hero: {
    tag: 'Домашний персонал · Алматы',
    h1: ['Надёжные люди', 'для вашего', 'дома и семьи'],
    p: 'Тщательно отобранные и проверенные няни, домработницы, повара и гувернантки. Индивидуальный подход к каждой семье — с 1996 года.',
    ctaPrimary: 'Подобрать персонал',
    ctaGhost: 'Позвонить нам',
    stats: { years: 'лет на рынке', families: 'семей доверились нам', verified: 'проверенный персонал' },
  },
  ticker: [
    'Проверка по линии МВД',
    'Медицинское освидетельствование',
    'Гарантия замены персонала',
    'Работаем с 1996 года',
    'Индивидуальный подбор',
    'Выезд в другой город и страну',
  ],
  services: {
    tag: 'Что мы предлагаем',
    h2: ['Персонал для', 'любой задачи'],
    items: [
      { name: 'Няня', desc: 'Подбираем с учётом возраста ребёнка, его характера и привычек вашей семьи. Обязательный опыт от 3 лет.' },
      { name: 'Домработница', desc: 'Опытные помощницы по хозяйству, знающие все нюансы работы по дому и современные средства уборки.' },
      { name: 'Гувернантка', desc: 'С педагогическим образованием. Подготовка к школе, помощь с уроками и развивающие занятия.' },
      { name: 'Повар', desc: 'Домашняя кухня и торжественные приёмы. Ежедневное питание и банкеты с сервировкой стола.' },
    ],
  },
  why: {
    tag: 'Почему нам доверяют',
    h2: ['30 лет на рынке —', 'это не случайность'],
    items: [
      { title: 'Медицинский контроль', text: 'Весь персонал проходит обязательное медицинское освидетельствование перед трудоустройством.' },
      { title: 'Проверка МВД', text: 'Проверяем по базам МВД. Вы точно знаете, кого пускаете в дом к своей семье.' },
      { title: 'Знаем о персонале всё', text: 'Многие сотрудники работают в семьях по 3–10 лет, затем возвращаются. У нас их полная история работы.' },
      { title: 'Гарантия замены', text: 'Если сотрудник не подошёл — заменим без дополнительных затрат с вашей стороны.' },
    ],
  },
  process: {
    tag: 'Как мы работаем',
    h2: ['Четыре шага', 'до результата'],
    items: [
      { title: 'Заявка', desc: 'Звоните или пишите. Рассказываете о семье, ребёнке и своих требованиях.' },
      { title: 'Подбор', desc: 'Работаем индивидуально — изучаем базу и выбираем подходящих кандидатов.' },
      { title: 'Встреча', desc: 'Организуем собеседование. Вы выбираете того, кто понравился.' },
      { title: 'Договор', desc: 'Заключаем договор и гарантируем замену, если что-то пойдёт не так.' },
    ],
  },
  contact: {
    tag: 'Связаться с нами',
    h2: ['Расскажите', 'о вашей семье'],
    phone: 'Телефон',
    whatsapp: 'WhatsApp',
    email: 'Email',
  },
  form: {
    name: 'Ваше имя *',
    phone: 'Номер телефона *',
    service: 'Кто нужен? *',
    serviceOptions: ['Няня', 'Домработница', 'Гувернантка', 'Повар', 'Другое'],
    message: 'Дополнительные пожелания (необязательно)',
    submit: 'Отправить заявку',
    sending: 'Отправляем...',
    note: '* Обязательные поля. Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    success: '✓ Заявка отправлена. Мы позвоним вам в течение одного рабочего дня.',
    error: 'Что-то пошло не так. Позвоните нам напрямую: +7 777 202 2028',
  },
  footer: {
    brandSub: 'Алматы · с 1996',
    desc: 'Агентство домашнего персонала. Работаем с семьями Алматы и Казахстана уже 30 лет.',
    staff: 'Персонал',
    company: 'Компания',
    contacts: 'Контакты',
    about: 'О нас',
    guarantees: 'Гарантии',
    forApplicants: 'Для соискателей',
    rights: '© 2025 Агентство Няня · Алматы, Казахстан',
  },
}

const kk: Dict = {
  htmlLang: 'kk',
  meta: {
    title: 'Няня агенттігі — Үй қызметкерлері · Алматы',
    description:
      'Алматыдағы тексерілген бала күтушілер, үй жұмысшылары, гувернанткалар мен аспазшылар. 1996 жылдан бері жұмыс істейміз. Медициналық бақылау, ІІМ тексеруі, ауыстыру кепілдігі.',
  },
  nav: { services: 'Қызметкерлер', why: 'Біз туралы', process: 'Қалай жұмыс істейміз', contacts: 'Байланыс', call: 'Қоңырау шалу' },
  logoSub: 'Алматы · 1996 жылдан',
  hero: {
    tag: 'Үй қызметкерлері · Алматы',
    h1: ['Үйіңіз бен', 'отбасыңызға', 'сенімді адамдар'],
    p: 'Мұқият таңдалған және тексерілген бала күтушілер, үй жұмысшылары, аспазшылар мен гувернанткалар. Әр отбасына жеке көзқарас — 1996 жылдан бері.',
    ctaPrimary: 'Қызметкер таңдау',
    ctaGhost: 'Бізге қоңырау шалу',
    stats: { years: 'нарықтағы жыл', families: 'отбасы бізге сенді', verified: 'тексерілген қызметкер' },
  },
  ticker: [
    'ІІМ желісі бойынша тексеру',
    'Медициналық куәландыру',
    'Қызметкерді ауыстыру кепілдігі',
    '1996 жылдан бері жұмыс істейміз',
    'Жеке таңдау',
    'Басқа қалаға және елге шығу',
  ],
  services: {
    tag: 'Біз не ұсынамыз',
    h2: ['Кез келген тапсырмаға', 'қызметкер'],
    items: [
      { name: 'Бала күтуші', desc: 'Баланың жасын, мінезін және отбасыңыздың әдеттерін ескере отырып таңдаймыз. Кемінде 3 жыл тәжірибе міндетті.' },
      { name: 'Үй жұмысшысы', desc: 'Үй шаруасының барлық нюанстарын және заманауи тазалау құралдарын білетін тәжірибелі көмекшілер.' },
      { name: 'Гувернантка', desc: 'Педагогикалық білімі бар. Мектепке дайындау, сабаққа көмек және дамыту сабақтары.' },
      { name: 'Аспазшы', desc: 'Үй асханасы және салтанатты қабылдаулар. Күнделікті тамақ және дастарқан жасаумен банкеттер.' },
    ],
  },
  why: {
    tag: 'Бізге неге сенеді',
    h2: ['Нарықтағы 30 жыл —', 'бұл кездейсоқтық емес'],
    items: [
      { title: 'Медициналық бақылау', text: 'Барлық қызметкерлер жұмысқа орналасар алдында міндетті медициналық куәландырудан өтеді.' },
      { title: 'ІІМ тексеруі', text: 'ІІМ базалары бойынша тексереміз. Үйіңізге кімді кіргізетініңізді нақты білесіз.' },
      { title: 'Қызметкер туралы бәрін білеміз', text: 'Көптеген қызметкерлер отбасыларда 3–10 жыл жұмыс істеп, кейін қайта оралады. Бізде олардың толық жұмыс тарихы бар.' },
      { title: 'Ауыстыру кепілдігі', text: 'Егер қызметкер сәйкес келмесе — қосымша шығынсыз ауыстырамыз.' },
    ],
  },
  process: {
    tag: 'Қалай жұмыс істейміз',
    h2: ['Нәтижеге дейін', 'төрт қадам'],
    items: [
      { title: 'Өтінім', desc: 'Қоңырау шалыңыз немесе жазыңыз. Отбасы, бала және талаптарыңыз туралы айтасыз.' },
      { title: 'Таңдау', desc: 'Жеке жұмыс істейміз — базаны зерттеп, лайықты үміткерлерді таңдаймыз.' },
      { title: 'Кездесу', desc: 'Сұхбат ұйымдастырамыз. Ұнағанын өзіңіз таңдайсыз.' },
      { title: 'Шарт', desc: 'Шарт жасаймыз және бірдеңе дұрыс болмаса, ауыстыруға кепілдік береміз.' },
    ],
  },
  contact: {
    tag: 'Бізбен байланысу',
    h2: ['Отбасыңыз туралы', 'айтып беріңіз'],
    phone: 'Телефон',
    whatsapp: 'WhatsApp',
    email: 'Email',
  },
  form: {
    name: 'Атыңыз *',
    phone: 'Телефон нөмірі *',
    service: 'Кім қажет? *',
    serviceOptions: ['Бала күтуші', 'Үй жұмысшысы', 'Гувернантка', 'Аспазшы', 'Басқа'],
    message: 'Қосымша тілектер (міндетті емес)',
    submit: 'Өтінім жіберу',
    sending: 'Жіберілуде...',
    note: '* Міндетті өрістер. Батырманы басу арқылы дербес деректерді өңдеуге келісім бересіз.',
    success: '✓ Өтінім жіберілді. Бір жұмыс күні ішінде сізге қоңырау шаламыз.',
    error: 'Бірдеңе дұрыс болмады. Бізге тікелей қоңырау шалыңыз: +7 777 202 2028',
  },
  footer: {
    brandSub: 'Алматы · 1996 жылдан',
    desc: 'Үй қызметкерлері агенттігі. Алматы мен Қазақстанның отбасыларымен 30 жыл жұмыс істеп келеміз.',
    staff: 'Қызметкерлер',
    company: 'Компания',
    contacts: 'Байланыс',
    about: 'Біз туралы',
    guarantees: 'Кепілдіктер',
    forApplicants: 'Үміткерлерге',
    rights: '© 2025 Няня агенттігі · Алматы, Қазақстан',
  },
}

const en: Dict = {
  htmlLang: 'en',
  meta: {
    title: 'Nanny Agency — Household Staff · Almaty',
    description:
      'Vetted nannies, housekeepers, governesses and cooks in Almaty. Working since 1996. Medical screening, police background checks, replacement guarantee.',
  },
  nav: { services: 'Staff', why: 'About', process: 'How we work', contacts: 'Contacts', call: 'Call us' },
  logoSub: 'Almaty · since 1996',
  hero: {
    tag: 'Household Staff · Almaty',
    h1: ['Trusted people', 'for your', 'home and family'],
    p: 'Carefully selected and vetted nannies, housekeepers, cooks and governesses. A personal approach to every family — since 1996.',
    ctaPrimary: 'Find staff',
    ctaGhost: 'Call us',
    stats: { years: 'years on the market', families: 'families trusted us', verified: 'vetted staff' },
  },
  ticker: [
    'Police background checks',
    'Medical screening',
    'Staff replacement guarantee',
    'Working since 1996',
    'Personalized selection',
    'Travel to another city or country',
  ],
  services: {
    tag: 'What we offer',
    h2: ['Staff for', 'any need'],
    items: [
      { name: 'Nanny', desc: 'We match based on the child’s age, character and your family’s habits. Minimum 3 years of experience required.' },
      { name: 'Housekeeper', desc: 'Experienced household helpers who know every detail of home care and modern cleaning products.' },
      { name: 'Governess', desc: 'With a teaching background. School preparation, homework help and developmental activities.' },
      { name: 'Cook', desc: 'Home cooking and formal receptions. Daily meals and banquets with full table service.' },
    ],
  },
  why: {
    tag: 'Why families trust us',
    h2: ['30 years on the market —', 'that’s no accident'],
    items: [
      { title: 'Medical screening', text: 'All staff undergo mandatory medical screening before employment.' },
      { title: 'Background checks', text: 'We check police databases. You know exactly who you let into your home.' },
      { title: 'We know our staff', text: 'Many work with families for 3–10 years, then return. We keep their full work history.' },
      { title: 'Replacement guarantee', text: 'If someone isn’t the right fit, we replace them at no extra cost to you.' },
    ],
  },
  process: {
    tag: 'How we work',
    h2: ['Four steps', 'to the result'],
    items: [
      { title: 'Request', desc: 'Call or message us. Tell us about your family, your child and your requirements.' },
      { title: 'Selection', desc: 'We work individually — we review our database and pick suitable candidates.' },
      { title: 'Meeting', desc: 'We arrange an interview. You choose the person you like.' },
      { title: 'Contract', desc: 'We sign a contract and guarantee a replacement if something goes wrong.' },
    ],
  },
  contact: {
    tag: 'Get in touch',
    h2: ['Tell us', 'about your family'],
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
  },
  form: {
    name: 'Your name *',
    phone: 'Phone number *',
    service: 'Who do you need? *',
    serviceOptions: ['Nanny', 'Housekeeper', 'Governess', 'Cook', 'Other'],
    message: 'Additional wishes (optional)',
    submit: 'Send request',
    sending: 'Sending...',
    note: '* Required fields. By clicking the button, you agree to the processing of personal data.',
    success: '✓ Your request has been sent. We’ll call you within one business day.',
    error: 'Something went wrong. Call us directly: +7 777 202 2028',
  },
  footer: {
    brandSub: 'Almaty · since 1996',
    desc: 'A household staff agency. We’ve served families in Almaty and Kazakhstan for 30 years.',
    staff: 'Staff',
    company: 'Company',
    contacts: 'Contacts',
    about: 'About',
    guarantees: 'Guarantees',
    forApplicants: 'For applicants',
    rights: '© 2025 Nanny Agency · Almaty, Kazakhstan',
  },
}

export const dictionaries: Record<Lang, Dict> = { ru, kk, en }
