import * as React from 'react'
import { useEffect, useState } from 'react'

type LanguageContextType = string | null

const LanguageContext = React.createContext<[LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>] | undefined>(undefined)

type LanguageProviderProps = {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const state = useState<LanguageContextType>(localStorage.getItem('currentLanguage'))
  const [currentLanguage] = state

  useEffect(() => {
    if (currentLanguage != null) {
      localStorage.setItem('currentLanguage', currentLanguage || '')
    }
  }, [currentLanguage])

  return <LanguageContext.Provider value={state}>{children}</LanguageContext.Provider>
}

export const useCurrentLanguage = (): [LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>] => {
  return React.useContext(LanguageContext) as [LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>]
}
