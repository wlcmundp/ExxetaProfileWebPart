import VisibilityTypes from '../constants/enums/visibilityTypes'

export default interface Experience {
  id: string
  level: number
  name: string
  nameDe: string
  visibility: VisibilityTypes
}
