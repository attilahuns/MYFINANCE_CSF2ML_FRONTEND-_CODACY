import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { BankDetail, BankDetailMetadata } from "../bank-detail";
import * as BankDetailAction from "./bank-detail.actions";

export interface State extends AppState {
  bankDetail: BankDetailState
}
export interface BankDetailState {
  bankDetails: BankDetail,
  metadata: BankDetailMetadata,
  error: string;
}
export const bankDetailInitialState: BankDetailState = {
  bankDetails: {
    bankName: '',
    bankAccountNumber: '',
    bankAccountDetails: ''
  },
  metadata: {
    title: '',
    bankNameLabel: '',
    bankAccountNumberLabel: '',
    bankDetailsLabel: '',
    updateInformationLabel: ''
  },
  error: '',
}

const getBankDetailState = createFeatureSelector<BankDetailState>('bankDetail');
export const getBankDetails = createSelector(getBankDetailState, state => state.bankDetails);
export const getBankDetailsMetadata = createSelector(getBankDetailState, state => state.metadata);

export const bankDetailReducer = createReducer<BankDetailState>(
  bankDetailInitialState,
  on(BankDetailAction.loadBankDetailSuccess, (state, action): BankDetailState => {
    return {
      ...state,
      bankDetails: action.bankDetails,
      error: '',
    }
  }),
  on(BankDetailAction.loadBankDetailFailure, (state, action): BankDetailState => {
    return {
      ...state,
      bankDetails: {
        bankName: '',
        bankAccountNumber: '',
        bankAccountDetails: ''
      },
      error: action.error,
    }
  }),
  on(BankDetailAction.loadBankDetailMetadataSuccess, (state, action): BankDetailState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(BankDetailAction.loadBankDetailMetadataFailure, (state, action): BankDetailState => {
    return {
      ...state,
      metadata: {
        title: '',
        bankNameLabel: '',
        bankAccountNumberLabel: '',
        bankDetailsLabel: '',
        updateInformationLabel: ''
      },
      error: action.error,
    }
  }),
)
