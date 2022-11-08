import styled from '@emotion/styled'
import i18n from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LanguageProvider } from './context/LanguageContext'
import * as bg from './translations/bg.json'
import * as de from './translations/de.json'
import * as en from './translations/en.json'
import * as hu from './translations/hu.json'
import * as pl from './translations/pl.json'
import * as ro from './translations/ro.json'
import * as ru from './translations/ru.json'
import { LanguageSelectView } from './views/LanguageSelect/LanguageSelectView'
import { SuccessView } from './views/Success/SuccessView'

function App() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: en,
        },
        de: {
          translation: de,
        },
        bg: {
          translation: bg,
        },
        hu: {
          translation: hu,
        },
        pl: {
          translation: pl,
        },
        ro: {
          translation: ro,
        },
        ru: {
          translation: ru,
        },
      },
      lng: 'en', // if you're using a language detector, do not define the lng option
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    })

  return (
    <LanguageProvider>
      <React.Suspense fallback="loading">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route index element={<LanguageSelectView />} />
              <Route path={'/success'} element={<SuccessView />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </React.Suspense>
    </LanguageProvider>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
`

export default App
