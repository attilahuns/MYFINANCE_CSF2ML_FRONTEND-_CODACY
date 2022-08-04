export interface Banner {
  message: string,
  moreInformation: string,
  cta?: {
      title: string,
      path: string,
  }
}
