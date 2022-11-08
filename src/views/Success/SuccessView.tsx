import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useCurrentLanguage } from '../../context/LanguageContext'

export const SuccessView: React.FC = () => {
  const navigate = useNavigate()

  const [currentLanguage] = useCurrentLanguage()

  const { t } = useTranslation()

  useEffect(() => {
    if (!currentLanguage) navigate('/')
  })

  return (
    <Container>
      <h1>{currentLanguage!.name}</h1>

      <ImageContainer>
        <Image src={'/assets/images/languages/' + currentLanguage!.code + '.svg'} alt="" />
      </ImageContainer>

      <ControlsContainer>
        <Text
          onClick={() => {
            navigate('/')
          }}>
          {t('back')}
          {currentLanguage!.code != 'en' &&
            ' (' +
              t('back', {
                lng: 'en',
              }) +
              ')'}
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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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
  text-align: center;
`
