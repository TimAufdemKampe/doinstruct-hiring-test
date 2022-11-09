import { render } from '@testing-library/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { LanguageProvider } from '../context/LanguageContext'
import i18n from '../i18n/i18n'
import { Language } from '../types/Language'

export function renderWithProviders(el: React.ReactNode, mockCurrentLanguage?: Language) {
  render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider contextValue={mockCurrentLanguage}>
        <MemoryRouter>{el}</MemoryRouter>
      </LanguageProvider>
    </I18nextProvider>
  )
}
