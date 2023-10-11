import searchSuggestionTypes from './searchSuggestionTypes'

export interface SuggestionResponse {
  source: searchSuggestionTypes
  id: string
  value: string
  valueDe: string
}

export interface Suggestion extends SuggestionResponse {
  image: string
}
export default interface SuggestionsSection {
  label: string
  suggestions: Suggestion[]
}
