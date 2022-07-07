import { createAction, props } from "@ngrx/store";
import { FooterItem } from "../../shared/footer/footer-item";
import { AccountFooterItem } from "../account-footer-item";
import { AccountServiceItem } from "../account-service-item";

export const loadFooterItems = createAction('[FOOTER] LOAD ITEMS');
export const loadFooterItemsSuccess = createAction('[FOOTER] LOAD ITEMS SUCCESS', props<{footerItems: FooterItem[]}>());
export const loadFooterItemsFailure = createAction('[FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadAccountServiceItems = createAction('[ACCOUNT SERVICE] LOAD ITEMS');
export const loadAccountServiceItemsSuccess = createAction('[ACCOUNT SERVICE] LOAD ITEMS SUCCESS', props<{accountServiceItems: AccountServiceItem[]}>());
export const loadAccountServiceItemsFailure = createAction('[ACCOUNT SERVICE] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadAccountFooterItems = createAction('[ACCOUNT FOOTER] LOAD ITEMS');
export const loadAccountFooterItemsSuccess = createAction('[ACCOUNT FOOTER] LOAD ITEMS SUCCESS', props<{accountFooterItems: AccountFooterItem[]}>());
export const loadAccountFooterItemsFailure = createAction('[ACCOUNT FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());
