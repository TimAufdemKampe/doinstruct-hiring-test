import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCurrentLanguage } from '../../context/LanguageContext'
import { Language } from '../../types/Language'

export const SuccessView: React.FC = () => {
  const navigate = useNavigate()

  const [currentLanguage] = useCurrentLanguage()
  const language: Language = currentLanguage ? JSON.parse(currentLanguage) : null

  useEffect(() => {
    if (!language) navigate('/')
  })

  return (
    <Container>
      <h1>{language.name}</h1>

      <ImageContainer>
        <Image src={'/assets/images/languages/' + language.code + '.svg'} alt="" />
      </ImageContainer>

      <ControlsContainer>
        <Text
          onClick={() => {
            navigate('/')
          }}>
          Zurück (Choose other language)
        </Text>
      </ControlsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 45%;
`

const ControlsContainer = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.p`
  padding-top: 16px;
  color: #565656;
  cursor: pointer;
`
