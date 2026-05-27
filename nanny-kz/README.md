# Агентство Няня — nanny.kz

Next.js 14 · TypeScript · Resend

---

## Запуск за 5 шагов

### 1. Открыть в VS Code

```bash
# Распакуй архив и открой папку в VS Code
code nanny-kz
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Создать файл с переменными окружения

```bash
cp .env.local.example .env.local
```

Открой `.env.local` и заполни:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=info@nanny.kz
CONTACT_EMAIL_FROM=site@nanny.kz
```

### 4. Получить API ключ Resend (бесплатно)

1. Зайди на **resend.com** → Sign Up (бесплатно)
2. В дашборде: **API Keys** → Create API Key → скопируй ключ в `.env.local`
3. **Domains** → Add Domain → добавь `nanny.kz` → верифицируй по DNS записям (10 минут)
4. После верификации `CONTACT_EMAIL_FROM=site@nanny.kz` начнёт работать

> **Пока домен не верифицирован** — для теста используй:
> `CONTACT_EMAIL_FROM=onboarding@resend.dev`
> `CONTACT_EMAIL_TO=твоя_личная@gmail.com`

### 5. Запустить локально

```bash
npm run dev
```

Открой **http://localhost:3000**

---

## Деплой на Vercel (рекомендуется)

```bash
npm i -g vercel
vercel
```

В Vercel Dashboard → Settings → Environment Variables — добавь те же три переменные из `.env.local`.

---

## Структура проекта

```
src/
├── app/
│   ├── api/contact/route.ts   # API endpoint отправки письма
│   ├── globals.css            # Все стили
│   ├── layout.tsx             # Шрифты, метаданные
│   └── page.tsx               # Главная страница
└── components/
    ├── ContactForm.tsx        # Форма с валидацией
    ├── FadeUp.tsx             # Анимация при скролле
    └── Header.tsx             # Хедер со скроллом
```

---

## Что делает форма

1. Валидирует поля на фронте (имя, телефон, услуга — обязательны)
2. Отправляет POST на `/api/contact`
3. API route отправляет письмо через Resend на `CONTACT_EMAIL_TO`
4. Показывает успех или ошибку с телефоном для связи

---

## Кнопки «Подобрать персонал» и «Позвонить нам»

Обе кнопки в hero плавно скроллят к секции `#contact` внизу страницы.
