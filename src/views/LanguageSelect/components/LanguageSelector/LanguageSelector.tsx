import styled from '@emotion/styled'
import React from 'react'

import { Card } from '../Card/Card'
import languageInformation from './../../../../assets/info.json'

export const LanguageSelector: React.FC = () => {
  return (
    <Container>
      {languageInformation.locales.map(locale => (
        <Card
          key={locale.code}
          showHoverEffect
          onClick={() => {
            console.log(locale.name)
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
