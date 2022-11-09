import styled from '@emotion/styled'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Card } from '../../components/Card/Card'
import { useCurrentLanguage } from '../../context/LanguageContext'

export const SuccessView: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [currentLanguage] = useCurrentLanguage()

  return (
    <Container>
      {currentLanguage != null ? (
        <React.Fragment>
          <h1 data-testid={'success-view-header-success'}>{currentLanguage.name}</h1>

          <ImageContainer>
            <Image src={'/assets/images/languages/' + currentLanguage.code + '.svg'} alt={currentLanguage.code + '-flag'} />
          </ImageContainer>

          <InformationContainer>
            <Card>
              <p>
                <span>Code: </span>
                <span>{currentLanguage.code}</span>
              </p>
              <p>
                <span>ISO: </span>
                <span>{currentLanguage.file}</span>
              </p>
              <p>
                <span>File: </span>
                <span>{currentLanguage.file}</span>
              </p>
            </Card>
          </InformationContainer>

          <ControlsContainer>
            <Text
              onClick={() => {
                navigate('/')
              }}>
              <span>{t('back')}</span>
              <span>{currentLanguage.code != 'en' && ' (' + t('back', { lng: 'en' }) + ')'}</span>
            </Text>
          </ControlsContainer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 data-testid={'success-view-header-error'}>An Error occurred</h1>

          <Text
            onClick={() => {
              navigate('/')
            }}>
            {t('back', {
              lng: 'en',
            })}
          </Text>
        </React.Fragment>
      )}
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

const InformationContainer = styled.div`
  padding-top: 64px;
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
