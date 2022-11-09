import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithProviders } from '../../../../util/testing-utils'
import { LanguageSelector } from './LanguageSelector'

test('LanguageSelector should be rendered', () => {
  renderWithProviders(<LanguageSelector></LanguageSelector>)
  expect(screen.getAllByTestId('language-selector-card').length).toBe(7)
})
