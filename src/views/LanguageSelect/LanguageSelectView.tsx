import styled from '@emotion/styled'
import React from 'react'

import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

export const LanguageSelectView: React.FC = () => {
  return (
    <div>
      <Header>
        <h1>Welche Sprache sprichst du?</h1>
      </Header>

      <LanguageSelector />
    </div>
  )
}

const Header = styled.div`
  padding-bottom: 64px;
`
