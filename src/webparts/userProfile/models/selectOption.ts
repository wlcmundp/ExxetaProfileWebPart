import ProfileDataType from '../constants/enums/profileDataTypes'

export default interface Option<T = string> {
  label: string
  value: T
  id?: string
  source?: ProfileDataType
  image?: string
  email?: string
  date?: string
  instances?: number
  count?: number
  isPrivate?: boolean
  name?: string
}

interface OptionData {
  id: string
  label: string
  source?: ProfileDataType
  value: string
}
export interface OptionExtended extends Option {
  data: OptionData
}

export interface RadioOption extends Option {
  hasChildren?: boolean
}

export interface GroupedOptions {
  label: string
  options: Option[]
}
