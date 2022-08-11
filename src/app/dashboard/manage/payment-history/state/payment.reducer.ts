import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Payment, PaymentMetadata } from "../payment";
import * as PaymentAction from "./payment.actions";

export interface State extends AppState {
  payment: PaymentState
}
export interface PaymentState {
  payments: Payment[],
  metadata: PaymentMetadata,
  error: string;
}
export const paymentInitialState: PaymentState = {
  payments: [],
  metadata: {
    title: '',
    downloadBtnLabel: '',
    tableMetadata: {
      dueAmountLabel: '',
      statusLabel: '',
      dueDatelabelLabel: '',
      viewColumn: {
        label: '',
        icon: '',
        alt: ''
      },
      viewMoreLabel: '',
      viewLessLabel: '',
      displayedRowsLimit: 5
    },
    communicationMetadata: {
      title: ''
    }
  },
  error: '',
}

const getPaymentState = createFeatureSelector<PaymentState>('payment');
export const getPayments = createSelector(getPaymentState, state => state.payments);
export const getPaymentMetadata = createSelector(getPaymentState, state => state.metadata);

export const paymentReducer = createReducer<PaymentState>(
  paymentInitialState,
  on(PaymentAction.loadPaymentSuccess, (state, action): PaymentState => {
    return {
      ...state,
      payments: action.payments,
      error: '',
    }
  }),
  on(PaymentAction.loadPaymentFailure, (state, action): PaymentState => {
    return {
      ...state,
      payments: [],
      error: action.error,
    }
  }),
  on(PaymentAction.loadPaymentMetadataSuccess, (state, action): PaymentState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(PaymentAction.loadPaymentMetadataFailure, (state, action): PaymentState => {
    return {
      ...state,
      metadata: {
        title: '',
        downloadBtnLabel: '',
        tableMetadata: {
          dueAmountLabel: '',
          statusLabel: '',
          dueDatelabelLabel: '',
          viewColumn: {
            label: '',
            icon: '',
            alt: ''
          },
          viewMoreLabel: '',
          viewLessLabel: '',
          displayedRowsLimit: 5
        },
        communicationMetadata: {
          title: ''
        }
      },
      error: action.error,
    }
  }),
)
