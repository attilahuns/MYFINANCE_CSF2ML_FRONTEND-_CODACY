import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Agreement } from "../agreement";
import * as AgreementAction from "./agreement.actions";

export interface State extends AppState {
  agreement: AgreementState
}
export interface AgreementState {
  agreements: Agreement[],
  error: string;
}
export const agreementInitialState: AgreementState = {
  agreements: [],
  error: '',
}

const getAgreementState = createFeatureSelector<AgreementState>('agreement');
export const getAgreements = createSelector(getAgreementState, state => state.agreements);

export const agreementReducer = createReducer<AgreementState>(
  agreementInitialState,
  on(AgreementAction.loadAgreementSuccess, (state, action): AgreementState => {
    return {
      ...state,
      agreements: action.agreements,
      error: '',
    }
  }),
  on(AgreementAction.loadAgreementFailure, (state, action): AgreementState => {
    return {
      ...state,
      agreements: [],
      error: action.error,
    }
  }),
)
