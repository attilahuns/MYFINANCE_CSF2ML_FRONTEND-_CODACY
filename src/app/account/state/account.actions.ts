import { createAction, props } from "@ngrx/store";
import { FooterItem } from "../../shared/footer/footer-item";
import { AccountMetadata } from "../account";
import { AccountFooterItem } from "../account-footer-item";


export const resetAccountMetadata = createAction('[ACCOUNT METADATA] INITIALIZE ITEMS');
export const loadAccountMetadata = createAction('[ACCOUNT METADATA] LOAD ITEMS', props<{page: string}>());
export const loadAccountMetadataSuccess = createAction('[ACCOUNT METADATA] LOAD ITEMS SUCCESS', props<{metadata: AccountMetadata}>());
export const loadAccountMetadataFailure = createAction('[ACCOUNT METADATA] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadFooterItems = createAction('[FOOTER] LOAD ITEMS');
export const loadFooterItemsSuccess = createAction('[FOOTER] LOAD ITEMS SUCCESS', props<{footerItems: FooterItem[]}>());
export const loadFooterItemsFailure = createAction('[FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadAccountFooterItems = createAction('[ACCOUNT FOOTER] LOAD ITEMS');
export const loadAccountFooterItemsSuccess = createAction('[ACCOUNT FOOTER] LOAD ITEMS SUCCESS', props<{accountFooterItems: AccountFooterItem[]}>());
export const loadAccountFooterItemsFailure = createAction('[ACCOUNT FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());
