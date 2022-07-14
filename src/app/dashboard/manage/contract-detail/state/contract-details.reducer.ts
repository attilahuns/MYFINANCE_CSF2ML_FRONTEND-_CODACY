import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { ContractDetail } from "../contractDetail";
import * as ContractDetailsAction from "./contract-details.actions";

export interface State extends AppState {
  contractDetails: ContractDetailsState
}
export interface ContractDetailsState {
  contractDetails: ContractDetail[],
  error: string;
}
export const contractDetailsInitialState: ContractDetailsState = {
  contractDetails: [],
  error: '',
}

const getContractDetailsState = createFeatureSelector<ContractDetailsState>('contractDetails');
export const getContractDetails = createSelector(getContractDetailsState, state => state.contractDetails);

export const ContractDetailsReducer = createReducer<ContractDetailsState>(
  contractDetailsInitialState,
  on(ContractDetailsAction.loadContractDetailSuccess, (state, action): ContractDetailsState => {
    return {
      ...state,
      contractDetails: action.contractDetails,
      error: '',
    }
  }),
  on(ContractDetailsAction.loadContractDetailFailure, (state, action): ContractDetailsState => {
    return {
      ...state,
      contractDetails: [],
      error: action.error,
    }
  }),
)
