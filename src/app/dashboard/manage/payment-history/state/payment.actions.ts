import { createAction, props } from "@ngrx/store";
import { Payment, PaymentMetadata } from "../payment";

export const loadPayment = createAction('[PAYMENT] LOAD PAYMENT DATA');
export const loadPaymentSuccess = createAction('[PAYMENT] LOAD PAYMENT DATA SUCCESS', props<{payments: Payment[]}>());
export const loadPaymentFailure = createAction('[PAYMENT] LOAD PAYMENT DATA FAILURE', props<{error: string}>());

export const loadPaymentMetadata = createAction('[PAYMENT] LOAD PAYMENT METADATA');
export const loadPaymentMetadataSuccess = createAction('[PAYMENT] LOAD PAYMENT METADATA SUCCESS', props<{metadata: PaymentMetadata}>());
export const loadPaymentMetadataFailure = createAction('[PAYMENT] LOAD PAYMENT METADATA FAILURE', props<{error: string}>());
