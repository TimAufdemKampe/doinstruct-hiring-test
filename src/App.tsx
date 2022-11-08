import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LanguageProvider } from './context/LanguageContext'
import { LanguageSelectView } from './views/LanguageSelect/LanguageSelectView'
import { SuccessView } from './views/Success/SuccessView'

function App() {
  return (
    <LanguageProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route index element={<LanguageSelectView />} />
            <Route path={'/success'} element={<SuccessView />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </LanguageProvider>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
`

export default App
