import styled from '@emotion/styled'
import React from 'react'

type CardType = {
  children: React.ReactNode
  showHoverEffect?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Card: React.FC<CardType> = ({ children, showHoverEffect, ...rest }) => {
  return (
    <Container showHoverEffect={showHoverEffect} {...rest}>
      {children}
    </Container>
  )
}

const Container = styled.div<{
  showHoverEffect?: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: ${({ showHoverEffect }) => showHoverEffect && '#dcdcdc'};
    cursor: ${({ showHoverEffect }) => (showHoverEffect ? 'pointer' : 'initial')};
  }
`
