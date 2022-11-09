import styled from '@emotion/styled'
import React from 'react'

import { useBreakpoint } from '../hooks/useBreakpoint'

type GeneralLayoutProps = {
  children: React.ReactNode
}

// This GeneralLayout will manage the element placement of the hol website
// If the breakpoint sm is reached, the MobileContainer will be rendered
// Otherwise the DesktopContainer will be rendered
export const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  const breakpoint = useBreakpoint()

  return <GeneralContainer>{breakpoint == 'sm' ? <MobileContainer>{children}</MobileContainer> : <DesktopContainer>{children}</DesktopContainer>}</GeneralContainer>
}

// General Wrapper container
const GeneralContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
`

// Desktop container, this will be shown if the breakpoint sm is not reached
const DesktopContainer = styled.div`
  height: 80%;
  width: 50%;
`

// Mobile container, this will be shown if the breakpoint sm is reached
const MobileContainer = styled.div`
  height: 100%;
  width: 100%;
`
