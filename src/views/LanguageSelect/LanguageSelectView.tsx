import styled from '@emotion/styled'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useCurrentLanguage } from '../../context/LanguageContext'
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

export const LanguageSelectView: React.FC = () => {
  const [currentLanguage] = useCurrentLanguage()
  const { t } = useTranslation()

  return (
    <div>
      <Header>
        <h1>{currentLanguage == null ? 'Welche Sprache sprichst du?' : t('header')}</h1>
      </Header>

      <LanguageSelector />
    </div>
  )
}

const Header = styled.div`
  padding-bottom: 64px;
`
