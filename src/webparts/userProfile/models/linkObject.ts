export default interface LinkObject {
  pathname: string
  state?: { [key: string]: string }
  search?: string
}
