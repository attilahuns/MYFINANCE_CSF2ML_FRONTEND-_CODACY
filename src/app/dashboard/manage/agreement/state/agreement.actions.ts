import { createAction, props } from "@ngrx/store";
import { Agreement } from "../agreement";

export const loadAgreement = createAction('[AGREEMENT] LOAD AGREEMENT DATA');
export const loadAgreementSuccess = createAction('[AGREEMENT] LOAD AGREEMENT DATA SUCCESS', props<{agreements: Agreement[]}>());
export const loadAgreementFailure = createAction('[AGREEMENT] LOAD AGREEMENT DATA FAILURE', props<{error: string}>());
