import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as bg from '../translations/bg.json'
import * as de from '../translations/de.json'
import * as en from '../translations/en.json'
import * as hu from '../translations/hu.json'
import * as pl from '../translations/pl.json'
import * as ro from '../translations/ro.json'
import * as ru from '../translations/ru.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
    bg: {
      translation: bg,
    },
    hu: {
      translation: hu,
    },
    pl: {
      translation: pl,
    },
    ro: {
      translation: ro,
    },
    ru: {
      translation: ru,
    },
  },
  lng: 'de',
  fallbackLng: 'de',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
