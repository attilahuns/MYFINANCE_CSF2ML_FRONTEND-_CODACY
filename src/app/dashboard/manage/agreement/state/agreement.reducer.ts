import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Agreement, AgreementMetadata } from "../agreement";
import * as AgreementAction from "./agreement.actions";

export interface State extends AppState {
  agreement: AgreementState
}
export interface AgreementState {
  agreements: Agreement[],
  metadata: AgreementMetadata,
  error: string;
}
export const agreementInitialState: AgreementState = {
  agreements: [],
  metadata: {
    title: '',
    viewAgreementBtnLabel: '',
    viewLessLabel: '',
    viewMoreLabel: '',
    displayedRowsLimit: 5,
    emptyListMessage: '',
    emptyContractListMessage: '',
    tableMetadata: {
      contractHolderLabel: '',
      vehiculeLabel: '',
      registrationNumberLabel: '',
      financeProductLabel: '',
      agreementNumberLabel: '',
      agreementStartDate: '',
      detailsLabel: '',
    },
    communicationMetadata: {
      title: ''
    }
  },
  error: '',
}

const getAgreementState = createFeatureSelector<AgreementState>('agreement');
export const getAgreements = createSelector(getAgreementState, state => state.agreements);
export const getAgreementsMetadata = createSelector(getAgreementState, state => state.metadata);
export const getAgreementsError = createSelector(getAgreementState, state => state.error);

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
  on(AgreementAction.loadAgreementMetadataSuccess, (state, action): AgreementState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(AgreementAction.loadAgreementMetadataFailure, (state, action): AgreementState => {
    return {
      ...state,
      metadata:  {
        title: '',
        viewAgreementBtnLabel: '',
        viewLessLabel: '',
        viewMoreLabel: '',
        displayedRowsLimit: 5,
        emptyListMessage: '',
        emptyContractListMessage: '',
        tableMetadata: {
          contractHolderLabel: '',
          vehiculeLabel: '',
          registrationNumberLabel: '',
          financeProductLabel: '',
          agreementNumberLabel: '',
          agreementStartDate: '',
          detailsLabel: '',
        },
        communicationMetadata: {
          title: ''
        }
      },
      error: action.error,
    }
  }),
)
