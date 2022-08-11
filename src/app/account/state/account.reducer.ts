import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { FooterItem } from "../../shared/footer/footer-item";
import { AccountMetadata } from "../account";
import { AccountFooterItem } from "../account-footer-item";
import * as AccountAction from "./account.actions";

export interface State extends AppState {
  account: AccountState
}
export interface AccountState {
  metadata: AccountMetadata,
  footerItems: FooterItem[],
  accountFooterItems: AccountFooterItem[],
  error: string;
}
export const signupInitialState: AccountState = {
  metadata: {
    title: '',
  },
  footerItems: [],
  accountFooterItems: [],
  error: '',
}

const getAccountState = createFeatureSelector<AccountState>('account');
export const getAccountMetadata = createSelector(getAccountState, state => state.metadata);
export const getFooterItems = createSelector(getAccountState, state => state.footerItems);
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
  on(AccountAction.resetAccountMetadata, (state, action): AccountState => {
    return {
      ...state,
      metadata: {
        title: '',
      },
      error: '',
    }
  }),
  on(AccountAction.loadAccountMetadataSuccess, (state, action): AccountState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(AccountAction.loadAccountMetadataFailure, (state, action): AccountState => {
    return {
      ...state,
      metadata: {
        title: '',
      },
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
