import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '../../../../components/Card/Card'
import { useCurrentLanguage } from '../../../../context/LanguageContext'
import languageInformation from './../../../../assets/info.json'

export const LanguageSelector: React.FC = () => {
  const navigate = useNavigate()

  const [, setCurrentLanguage] = useCurrentLanguage()

  return (
    <Container>
      {languageInformation.locales.map(locale => (
        <Card
          key={locale.code}
          showHoverEffect
          onClick={() => {
            setCurrentLanguage(JSON.stringify(locale))
            navigate('/success')
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
`

const Text = styled.span`
  padding-top: 16px;
`
