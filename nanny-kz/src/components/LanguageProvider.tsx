'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { dictionaries, type Dict, type Lang } from '@/lib/i18n'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict }

const LanguageContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'nanny-lang'

function isLang(v: unknown): v is Lang {
  return v === 'ru' || v === 'kk' || v === 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (isLang(stored)) {
      setLangState(stored)
    } else if (typeof navigator !== 'undefined') {
      const nav = navigator.language.slice(0, 2).toLowerCase()
      if (isLang(nav)) setLangState(nav)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = dictionaries[lang].htmlLang
      document.title = dictionaries[lang].meta.title
    }
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
