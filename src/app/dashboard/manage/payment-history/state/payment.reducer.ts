import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Payment } from "../payment";
import * as PaymentAction from "./payment.actions";

export interface State extends AppState {
  payment: PaymentState
}
export interface PaymentState {
  payments: Payment[],
  error: string;
}
export const paymentInitialState: PaymentState = {
  payments: [],
  error: '',
}

const getPaymentState = createFeatureSelector<PaymentState>('payment');
export const getPayments = createSelector(getPaymentState, state => state.payments);

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
)
