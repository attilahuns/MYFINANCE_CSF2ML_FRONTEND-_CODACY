import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { SignupMetadata } from "../signup";
import * as SignupAction from "./signup.actions";

export interface State extends AppState {
  signup: SignupState
}
export interface SignupState {
  metadata: SignupMetadata,
  error: string;
}
export const signupInitialState: SignupState = {
  metadata: {
    emailLabel: '',
    emailErrorLabel: '',
    rememberEmailLabel: '',
    captchaLabel: '',
    submitBtnLabel: '',
    ctaHelp: {
      title: '',
      body: '',
      label: ''
    },
    accountExistsLabel: '',
    ctaLoginLabel: '',
    confirmationMessage: ''
  },
  error: '',
}

const getSignupState = createFeatureSelector<SignupState>('signup');
export const getSignupMetadata = createSelector(getSignupState, state => state.metadata);

export const signupReducer = createReducer<SignupState>(
  signupInitialState,
  on(SignupAction.loadSignupMetadataSuccess, (state, action): SignupState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(SignupAction.loadSignupMetadataFailure, (state, action): SignupState => {
    return {
      ...state,
      metadata: {
        emailLabel: '',
        emailErrorLabel: '',
        rememberEmailLabel: '',
        captchaLabel: '',
        submitBtnLabel: '',
        ctaHelp: {
          title: '',
          body: '',
          label: ''
        },
        accountExistsLabel: '',
        ctaLoginLabel: '',
        confirmationMessage: ''
      },
      error: action.error,
    }
  }),
)
