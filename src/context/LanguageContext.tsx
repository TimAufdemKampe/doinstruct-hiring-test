import * as React from 'react'
import { useEffect, useState } from 'react'

import { Language } from '../types/Language'

type LanguageContextType = Language | null

type LanguageProviderProps = {
  children: React.ReactNode
}

const LanguageContext = React.createContext<[LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>] | undefined>(undefined)

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Local context state
  const [state, setState] = useState<LanguageContextType>(
    localStorage.getItem('currentLanguage') != null || localStorage.getItem('currentLanguage') != 'null' ? JSON.parse(localStorage.getItem('currentLanguage') as string) : null
  )
  // Watch the state and sync it with the localStorage
  useEffect(() => {
    if (state != null) {
      localStorage.setItem('currentLanguage', JSON.stringify(state))
    }
  }, [state])

  return <LanguageContext.Provider value={[state, setState]}>{children}</LanguageContext.Provider>
}

// A custom hook to get the language context
export const useCurrentLanguage = (): [LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>] => {
  return React.useContext(LanguageContext) as [LanguageContextType, React.Dispatch<React.SetStateAction<LanguageContextType>>]
}
