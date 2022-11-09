import './i18n/i18n'

import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LanguageProvider } from './context/LanguageContext'
import { GeneralLayout } from './layouts/GeneralLayout'
import { LanguageSelectView } from './views/LanguageSelect/LanguageSelectView'
import { SuccessView } from './views/Success/SuccessView'

function App() {
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
