import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { ContractDetail, ContractDetailMetadata } from "../contractDetail";
import * as ContractDetailsAction from "./contract-details.actions";

export interface State extends AppState {
  contractDetails: ContractDetailsState
}
export interface ContractDetailsState {
  contractDetails: ContractDetail[],
  contractDetailMetadata: ContractDetailMetadata,
  error: string;
}
export const contractDetailsInitialState: ContractDetailsState = {
  contractDetails: [],
  contractDetailMetadata: {
    title: '',
    agreementDetailMetadata: {
      title: '',
      financeProductLabel: '',
      amountFinancedLabel: '',
      totalContractMileageLabel: '',
      numberOfInstalmentsLabel: '',
      nextPaymentDateLabel: '',
      amountOfNextPaymentLabel: '',
      agreementStartDateLabel: '',
      agreementEndDateLabel: '',
      tanLabel: '',
      residualValueLabel: ''
    },
    vehiculeDetailMetadata: {
      title: '',
      vinLabel: '',
      modelLabel: '',
      registrationNumberLabel: '',
      co2ConsumptionLabel: '',
      deliveryDateLabel: '',
      horsepowerLabel: '',
      cylinderLabel: ''
    },
    serviceDetailMetadata: {
      title: '',
      viewMoreLabel: '',
      viewLessLabel: '',
      displayedRowsLimit: 2
    },
    documentDetailMetadata: {
      documentLabel: '',
      referenceLabel: '',
      dateLabel: '',
      downloadColumn: {
        label: '',
        picto: ''
      },
      viewColumn: {
        label: '',
        picto: ''
      },
      viewMoreLabel: '',
      viewLessLabel: '',
      displayedRowsLimit: 3
    }
  },
  error: '',
}

const getContractDetailsState = createFeatureSelector<ContractDetailsState>('contractDetails');
export const getContractDetails = createSelector(getContractDetailsState, state => state.contractDetails);
export const getContractMetadataDetails = createSelector(getContractDetailsState, state => state.contractDetailMetadata);

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
  on(ContractDetailsAction.loadContractDetailMetadataSuccess, (state, action): ContractDetailsState => {
    return {
      ...state,
      contractDetailMetadata: action.contractDetailMetadata,
      error: '',
    }
  }),
  on(ContractDetailsAction.loadContractDetailMetadataFailure, (state, action): ContractDetailsState => {
    return {
      ...state,
      contractDetailMetadata: {
        title: '',
        agreementDetailMetadata: {
          title: '',
          financeProductLabel: '',
          amountFinancedLabel: '',
          totalContractMileageLabel: '',
          numberOfInstalmentsLabel: '',
          nextPaymentDateLabel: '',
          amountOfNextPaymentLabel: '',
          agreementStartDateLabel: '',
          agreementEndDateLabel: '',
          tanLabel: '',
          residualValueLabel: ''
        },
        vehiculeDetailMetadata: {
          title: '',
          vinLabel: '',
          modelLabel: '',
          registrationNumberLabel: '',
          co2ConsumptionLabel: '',
          deliveryDateLabel: '',
          horsepowerLabel: '',
          cylinderLabel: ''
        },
        serviceDetailMetadata: {
          title: '',
          viewMoreLabel: '',
          viewLessLabel: '',
          displayedRowsLimit: 2
        },
        documentDetailMetadata: {
          documentLabel: '',
          referenceLabel: '',
          dateLabel: '',
          downloadColumn: {
            label: '',
            picto: ''
          },
          viewColumn: {
            label: '',
            picto: ''
          },
          viewMoreLabel: '',
          viewLessLabel: '',
          displayedRowsLimit: 3
        }
      },
      error: action.error,
    }
  }),
)
