import React, { useState } from "react"
import { ValidLanguage } from "./types"

const LanguageContext = React.createContext<LangContext>({} as LangContext)

const LanguageProvider = ({children}:Props) => {
  const [lang, setLang] = useState<ValidLanguage>('EN-US')

  const toggleLanguage = (langCode:ValidLanguage) => {
    console.log(langCode)
    setLang(langCode)
  }

  const translated = lang !== "EN-US"

  return (
    <LanguageContext.Provider value={{
      lang, 
      translated,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider, LanguageContext }


interface Props {
  children: JSX.Element | JSX.Element[]
}

interface LangContext {
  lang: ValidLanguage;
  translated: boolean;
  toggleLanguage: (lang: ValidLanguage) => void;
}