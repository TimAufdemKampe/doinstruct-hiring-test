import styled from '@emotion/styled'
import i18n from 'i18next'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '../../../../components/Card/Card'
import { useCurrentLanguage } from '../../../../context/LanguageContext'
import { Language } from '../../../../types/Language'
import languageInformation from './../../../../assets/info.json'

export const LanguageSelector: React.FC = () => {
  const navigate = useNavigate()

  const [currentLanguage, setCurrentLanguage] = useCurrentLanguage()

  // This is the language which is similar of the localStorage
  const [storedLanguage, setStoredLanguage] = React.useState<Language | null>(null)

  return (
    <Container>
      {languageInformation.locales.map(locale => (
        <Card
          key={locale.code}
          showHoverEffect
          onClick={() => {
            setCurrentLanguage(locale)
            i18n.changeLanguage(locale.code).then(() => {
              navigate('/success')
            })
          }}
          onMouseEnter={() => {
            setStoredLanguage(currentLanguage)
            i18n.changeLanguage(locale.code)
          }}
          onMouseLeave={() => {
            if (storedLanguage != null) i18n.changeLanguage(storedLanguage.code)
            setStoredLanguage(null)
          }}>
          <Image src={'/assets/images/languages/' + locale.code + '.svg'} alt="TEST" />
          <Text>{locale.name}</Text>
        </Card>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 28px;
  padding-left: 12px;
  padding-right: 12px;
`

const Image = styled.img`
  width: 45%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`

const Text = styled.span`
  padding-top: 16px;
`
