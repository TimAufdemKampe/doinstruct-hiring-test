import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LanguageSelectView } from './views/LanguageSelect/LanguageSelectView'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index element={<LanguageSelectView />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
`

export default App
