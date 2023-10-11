import ProfileDataType from '../constants/enums/profileDataTypes'
import VisibilityTypes from '../constants/enums/visibilityTypes'

export default interface Tag {
  id: string
  name: string
  nameDe?: string
  level?: number
  type?: ProfileDataType
  visibility?: VisibilityTypes
  visibleForOthers?: boolean
  common?: boolean
  matched?: boolean
  isDouble?: boolean
}
