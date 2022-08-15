import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { SignInMetadata } from "../signin";
import * as SigninAction from "./signin.actions";

export interface State extends AppState {
  signin: SigninState
}
export interface SigninState {
  metadata: SignInMetadata,
  error: string;
}
export const signinInitialState: SigninState = {
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
    notRegisteredLabel: '',
    ctaPersonalLabel: '',
    ctaBusinessLabel: ''
  },
  error: '',
}

const getSigninState = createFeatureSelector<SigninState>('signin');
export const getSigninMetadata = createSelector(getSigninState, state => state.metadata);

export const signinReducer = createReducer<SigninState>(
  signinInitialState,
  on(SigninAction.loadSigninMetadataSuccess, (state, action): SigninState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(SigninAction.loadSigninMetadataFailure, (state, action): SigninState => {
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
        notRegisteredLabel: '',
        ctaPersonalLabel: '',
        ctaBusinessLabel: ''
      },
      error: action.error,
    }
  }),
)
