import styled from '@emotion/styled'
import i18n from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LanguageProvider } from './context/LanguageContext'
import { GeneralLayout } from './layouts/GeneralLayout'
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
  i18n.use(initReactI18next).init({
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
    lng: 'de',
    fallbackLng: 'de',

    interpolation: {
      escapeValue: false,
    },
  })

  return (
    <LanguageProvider>
      <React.Suspense fallback="loading">
        <Container>
          <GeneralLayout>
            <BrowserRouter>
              <Routes>
                <Route index element={<LanguageSelectView />} />
                <Route path={'/success'} element={<SuccessView />} />
              </Routes>
            </BrowserRouter>
          </GeneralLayout>
        </Container>
      </React.Suspense>
    </LanguageProvider>
  )
}

const Container = styled.div`
  height: calc(100% - 100px);
  width: calc(100% - 100px);
  margin: 50px;
`

export default App
