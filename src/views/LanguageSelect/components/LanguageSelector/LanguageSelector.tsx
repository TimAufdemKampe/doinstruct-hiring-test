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

  const [, setCurrentLanguage] = useCurrentLanguage()

  // This will copy the current selected language to this state to be able to change it after the mouse leaves the card
  const [storedLanguage] = React.useState<Language | null>(languageInformation.locales.find(language => language.code === i18n.language) || null)

  return (
    <Container>
      {languageInformation.locales.map(locale => (
        <Card
          key={locale.code}
          data-testid={`language-selector-card`}
          showHoverEffect
          onClick={() => {
            // Set the selected language to the context
            setCurrentLanguage(locale)
            // Change the language of the i18n instance
            i18n.changeLanguage(locale.code)
            // Navigate to the success page
            navigate('/success')
          }}
          onMouseEnter={() => {
            // Change the language of the i18n instance
            i18n.changeLanguage(locale.code)
          }}
          onMouseLeave={() => {
            // Change the language of the i18n instance back to the stored language
            if (storedLanguage) i18n.changeLanguage(storedLanguage.code)
          }}>
          <Image src={'/assets/images/languages/' + locale.code + '.svg'} alt={locale.code + '-flag'} />
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
