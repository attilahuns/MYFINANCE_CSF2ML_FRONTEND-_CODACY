import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { FooterItem } from "../../shared/footer/footer-item";
import { AccountFooterItem } from "../account-footer-item";
import { AccountServiceItem } from "../account-service-item";
import * as AccountAction from "./account.actions";

export interface State extends AppState {
  account: AccountState
}
export interface AccountState {
  footerItems: FooterItem[],
  accountServiceItems: AccountServiceItem[],
  accountFooterItems: AccountFooterItem[],
  error: string;
}
export const signupInitialState: AccountState = {
  footerItems: [],
  accountServiceItems: [],
  accountFooterItems: [],
  error: '',
}

const getAccountState = createFeatureSelector<AccountState>('account');
export const getFooterItems = createSelector(getAccountState, state => state.footerItems);
export const getServiceItems = createSelector(getAccountState, state => state.accountServiceItems);
export const getAccountFooterItems = createSelector(getAccountState, state => state.accountFooterItems);

export const accountReducer = createReducer<AccountState>(
  signupInitialState,
  on(AccountAction.loadFooterItemsSuccess, (state, action): AccountState => {
    return {
      ...state,
      footerItems: action.footerItems,
      error: '',
    }
  }),
  on(AccountAction.loadFooterItemsFailure, (state, action): AccountState => {
    return {
      ...state,
      footerItems: [],
      error: action.error,
    }
  }),
  on(AccountAction.loadAccountServiceItemsSuccess, (state, action): AccountState => {
    return {
      ...state,
      accountServiceItems: action.accountServiceItems,
      error: '',
    }
  }),
  on(AccountAction.loadAccountServiceItemsFailure, (state, action): AccountState => {
    return {
      ...state,
      accountServiceItems: [],
      error: action.error,
    }
  }),
  on(AccountAction.loadAccountFooterItemsSuccess, (state, action): AccountState => {
    return {
      ...state,
      accountFooterItems: action.accountFooterItems,
      error: '',
    }
  }),
  on(AccountAction.loadAccountFooterItemsFailure, (state, action): AccountState => {
    return {
      ...state,
      accountFooterItems: [],
      error: action.error,
    }
  }),
);
