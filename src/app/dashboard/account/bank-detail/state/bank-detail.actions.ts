import { createAction, props } from "@ngrx/store";
import { BankDetail, BankDetailMetadata } from "../bank-detail";

export const loadBankDetail = createAction('[BANK DETAIL] LOAD BANK DETAIL DATA');
export const loadBankDetailSuccess = createAction('[BANK DETAIL] LOAD BANK DETAIL DATA SUCCESS', props<{bankDetails: BankDetail}>());
export const loadBankDetailFailure = createAction('[BANK DETAIL] LOAD BANK DETAIL DATA FAILURE', props<{error: string}>());

export const loadBankDetailMetadata = createAction('[BANK DETAIL METADATA] LOAD BANK DETAIL METADATA');
export const loadBankDetailMetadataSuccess = createAction('[BANK DETAIL METADATA] LOAD BANK DETAIL METADATA SUCCESS', props<{metadata: BankDetailMetadata}>());
export const loadBankDetailMetadataFailure = createAction('[BANK DETAIL METADATA] LOAD BANK DETAIL METADATA FAILURE', props<{error: string}>());
