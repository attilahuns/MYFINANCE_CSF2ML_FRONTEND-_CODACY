import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { AccessManagement } from "../access-management";
import * as AccessManagementAction from "./access-management.actions";

export interface State extends AppState {
  accessManagement: AccessManagementState
}
export interface AccessManagementState {
  accessManagementItems: AccessManagement[],
  error: string;
}
export const accessManagementInitialState: AccessManagementState = {
  accessManagementItems: [],
  error: '',
}

const getAccessManagementState = createFeatureSelector<AccessManagementState>('accessManagement');
export const getAccessManagementItems = createSelector(getAccessManagementState, state => state.accessManagementItems);

export const accessManagementReducer = createReducer<AccessManagementState>(
  accessManagementInitialState,
  on(AccessManagementAction.loadAccessManagementItemsSuccess, (state, action): AccessManagementState => {
    return {
      ...state,
      accessManagementItems: action.accessManagementItems,
      error: '',
    }
  }),
  on(AccessManagementAction.loadAccessManagementItemsFailure, (state, action): AccessManagementState => {
    return {
      ...state,
      accessManagementItems: [],
      error: action.error,
    }
  }),
)
