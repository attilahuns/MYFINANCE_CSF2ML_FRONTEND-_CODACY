export interface SignupMetadata {
  emailLabel: string;
  emailErrorLabel: string;
  rememberEmailLabel: string;
  captchaLabel: string;
  submitBtnLabel: string;
  ctaHelp: {
    title: string;
    body: string;
    label: string;
  },
  accountExistsLabel: string;
  ctaLoginLabel: string;
  confirmationMessage: string;
}

export interface SignupCompleteMetadata {
  descriptionMessage: string;
  ctaSendLabel: string;
  feedbackMessage: string;
}

export interface SignupCompletePersonalMetadata extends SignupCompleteMetadata {
  nif: SignupCompleteInputMetadata;
  birthDate: SignupCompleteInputMetadata;
}

export interface SignupCompleteBusinessMetadata extends SignupCompleteMetadata {
  piva: SignupCompleteInputMetadata;
  vin: SignupCompleteInputMetadata;
  address: SignupCompleteInputMetadata;
}

export interface SignupCompleteInputMetadata {
  label: string;
  errorMessage: string;
}
