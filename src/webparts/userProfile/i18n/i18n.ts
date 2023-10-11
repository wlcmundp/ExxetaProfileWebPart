import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import enCommon from './locales/en/common'
import deCommon from './locales/de/common'
import enProfile from './locales/en/profile'
import deProfile from './locales/de/profile'

const langEn: typeof langDe = {
  common: enCommon,
  profile: enProfile
}

const langDe = {
    common: deCommon,
    profile: deProfile
}

const resources = {
  en: langEn,
  de: langDe,
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'de',
  lng: 'de',
  debug: false,
  keySeparator: '.',
  interpolation: { escapeValue: false },
  initImmediate: false,
})

export default i18n
