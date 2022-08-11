export enum AccountPage {
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
}

export interface AccountMetadata {
  title: string,
  features?: AccountFeature[],
}
export interface AccountFeature {
  icon: string,
  title: string,
}
