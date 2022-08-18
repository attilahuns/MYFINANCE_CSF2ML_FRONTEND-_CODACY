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

export interface OtpMetadata {
  otpGeneralMetadata: OtpGeneralMetadata,
  otpInvalidMetadata: OtpInvalidMetadata,
  otpBusinessMetadata: OtpBusinessMetadata,
  otpPersonalMetadata: OtpPersonalMetadata
}

export interface OtpGeneralMetadata {
  otp: {
    label: string,
    errorMessage: string
  },
  notReceivedSms: {
    label: string,
    tooltip: string
  },
  ctaValidateLabel: string,
}

export interface OtpInvalidMetadata {
  notValidFeedbackMessage: string,
  ctaResendLabel: string
}

export interface OtpNotReceivedMetadata {
  descriptionMessage: string,
  phone: {
    label: string,
    errorMessage: string
  },
  ctaSendLabel: string,
  feedbackMessage: string,
}

export interface OtpBusinessMetadata extends OtpNotReceivedMetadata {
  piva: {
    label: string,
    errorMessage: string,
  }
}

export interface OtpPersonalMetadata extends OtpNotReceivedMetadata {
  nif: {
    label: string,
    errorMessage: string,
  }
}
