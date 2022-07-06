import { createAction, props } from "@ngrx/store";
import { Payment } from "../payment";

export const loadPayment = createAction('[PAYMENT] LOAD PAYMENT DATA');
export const loadPaymentSuccess = createAction('[PAYMENT] LOAD PAYMENT DATA SUCCESS', props<{payments: Payment[]}>());
export const loadPaymentFailure = createAction('[PAYMENT] LOAD PAYMENT DATA FAILURE', props<{error: string}>());
