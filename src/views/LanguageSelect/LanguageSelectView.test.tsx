import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithProviders } from '../../util/testing-utils'
import { LanguageSelectView } from './LanguageSelectView'

test('LanguageSelectView should be rendered', () => {
  renderWithProviders(<LanguageSelectView></LanguageSelectView>)
  expect(screen.getByTestId('language-select-view-header')).toBeInTheDocument()
  expect(screen.getAllByTestId('language-selector-card').length).toBe(7)
})
