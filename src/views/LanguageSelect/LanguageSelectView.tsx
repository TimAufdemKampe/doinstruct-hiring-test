import styled from '@emotion/styled'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSelector } from './components/LanguageSelector/LanguageSelector'

export const LanguageSelectView: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Header>
        <h1 data-testid={'language-select-view-header'}>
          {/* This translation hook will return the header in the current language and otherwise it will show the german translated header */}
          {t('header', {
            fallbackLng: 'de',
          })}
        </h1>
      </Header>

      <LanguageSelector />
    </div>
  )
}

const Header = styled.div`
  height: 144px;
`
