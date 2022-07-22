import { createAction, props } from "@ngrx/store";
import { Agreement, AgreementMetadata } from "../agreement";

export const loadAgreement = createAction('[AGREEMENT] LOAD AGREEMENT DATA');
export const loadAgreementSuccess = createAction('[AGREEMENT] LOAD AGREEMENT DATA SUCCESS', props<{agreements: Agreement[]}>());
export const loadAgreementFailure = createAction('[AGREEMENT] LOAD AGREEMENT DATA FAILURE', props<{error: string}>());

export const loadAgreementMetadata = createAction('[AGREEMENT METADATA] LOAD AGREEMENT METADATA');
export const loadAgreementMetadataSuccess = createAction('[AGREEMENT METADATA] LOAD AGREEMENT METADATA SUCCESS', props<{metadata: AgreementMetadata}>());
export const loadAgreementMetadataFailure = createAction('[AGREEMENT METADATA] LOAD AGREEMENT METADATA FAILURE', props<{error: string}>());
