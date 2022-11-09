import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithProviders } from '../../util/testing-utils'
import { SuccessView } from './SuccessView'

test('SuccessView should be rendered and show and error', () => {
  renderWithProviders(<SuccessView></SuccessView>)

  expect(screen.getByTestId('success-view-header-error')).toBeInTheDocument()
})

test('SuccessView should be rendered and show the selected language', () => {
  renderWithProviders(<SuccessView></SuccessView>, {
    code: 'en',
    iso: 'en-EN',
    name: 'English',
    file: 'en.json',
  })

  expect(screen.getByTestId('success-view-header-success')).toBeInTheDocument()
  expect(screen.getByTestId('success-view-header-success').textContent).toBe('English')
})
