import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { AccessManagementEnterprise } from "../access-management-entreprise";
import * as AccessManagementEnterpriseAction from "./access-management-enterprise.actions";

export interface State extends AppState {
  accessManagementEnterprise: AccessManagementEnterpriseState
}
export interface AccessManagementEnterpriseState {
  accessManagementEnterpriseItems: AccessManagementEnterprise[],
  error: string;
}
export const accessManagementEnterpriseInitialState: AccessManagementEnterpriseState = {
  accessManagementEnterpriseItems: [],
  error: '',
}

const getAccessManagementEnterpriseState = createFeatureSelector<AccessManagementEnterpriseState>('accessManagementEnterprise');
export const getAccessManagementEnterpriseItems = createSelector(getAccessManagementEnterpriseState, state => state.accessManagementEnterpriseItems);
export const getAccessManagementEnterpriseError = createSelector(getAccessManagementEnterpriseState, state => state.error);

export const accessManagementEnterpriseReducer = createReducer<AccessManagementEnterpriseState>(
  accessManagementEnterpriseInitialState,
  on(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItemsSuccess, (state, action): AccessManagementEnterpriseState => {
    return {
      ...state,
      accessManagementEnterpriseItems: action.accessManagementEnterpriseItems,
      error: '',
    }
  }),
  on(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItemsFailure, (state, action): AccessManagementEnterpriseState => {
    return {
      ...state,
      accessManagementEnterpriseItems: [],
      error: action.error,
    }
  }),
)
