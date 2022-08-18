import { createAction, props } from "@ngrx/store";
import { FooterItem } from "../../shared/footer/footer-item";
import { AccountMetadata, OtpMetadata } from "../account";


export const resetAccountMetadata = createAction('[ACCOUNT METADATA] INITIALIZE ITEMS');
export const loadAccountMetadata = createAction('[ACCOUNT METADATA] LOAD ITEMS', props<{page: string}>());
export const loadAccountMetadataSuccess = createAction('[ACCOUNT METADATA] LOAD ITEMS SUCCESS', props<{metadata: AccountMetadata}>());
export const loadAccountMetadataFailure = createAction('[ACCOUNT METADATA] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadFooterItems = createAction('[FOOTER] LOAD ITEMS');
export const loadFooterItemsSuccess = createAction('[FOOTER] LOAD ITEMS SUCCESS', props<{footerItems: FooterItem[]}>());
export const loadFooterItemsFailure = createAction('[FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadOtpMetadata = createAction('[OTP] LOAD OTP METADATA');
export const loadOtpMetadataSuccess = createAction('[OTP] LOAD OTP METADATA SUCCESS', props<{metadata: OtpMetadata}>());
export const loadOtpMetadataFailure = createAction('[OTP] LOAD OTP METADATA FAILURE', props<{error: string}>());
