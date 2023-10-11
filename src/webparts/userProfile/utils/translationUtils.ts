import { locale } from 'dayjs'

import Option from '../models/selectOption'
import i18n from '../i18n/i18n'
import Tag from '../models/tag'
import { Suggestion } from '../models/searchSuggestion'
import Experience from '../models/experience'
import Language from '../models/language'

const getCurrentLocale = (): 'de' | 'en' => {
  const lang = i18n.language
  if (lang === 'en' || lang === 'de') {
    return lang
  }
  return 'de'
}

const getTranslatedOptions = <T = string>(items: { [s: number]: T }, translation: string): Option<T>[] => {
  const options: Option<T>[] = []
  //for (const [key, value] of Object.entries(items)) {
  //  options.push({ label: i18n.t(`${translation}:${value}`), value: value, id: key })
  //}
  return options
}

const getNameRegional = (tag: Tag | Experience | Language): string => {
  if (i18n.language == 'de') {
    return tag.nameDe || tag.name
  }
  return tag.name
}

const getSuggestionRegional = (suggestion: Suggestion): string => {
  if (i18n.language == 'de') {
    return suggestion.valueDe || suggestion.value
  }
  return suggestion.value
}

const changeInterfaceLangauge = async (language: string): Promise<void> => {
  locale(language)
  await i18n.changeLanguage(language)
}

const convertInputToValidMail = (mail: string): string => {
  return mail
    .replace(/[^;]*.?</g, '')
    .replace(/>/g, '')
    .trim()
}

export {
  getCurrentLocale,
  getTranslatedOptions,
  changeInterfaceLangauge,
  convertInputToValidMail,
  getNameRegional,
  getSuggestionRegional,
}
