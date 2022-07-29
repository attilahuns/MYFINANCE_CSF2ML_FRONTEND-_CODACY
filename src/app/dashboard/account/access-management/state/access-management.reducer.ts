import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { AccessManagement, AccessManagementMetadata } from "../access-management";
import * as AccessManagementAction from "./access-management.actions";

export interface State extends AppState {
  accessManagement: AccessManagementState
}
export interface AccessManagementState {
  accessManagementItems: AccessManagement[],
  accessManagementMetadata: AccessManagementMetadata,
  error: string;
}
export const accessManagementInitialState: AccessManagementState = {
  accessManagementItems: [],
  accessManagementMetadata: {
    title: '',
    accessQuestionLabel: '',
    newAccessLabel: '',
    accessWarningLabel: '',
    updateAccessLabel: '',
    noAccessToDisplayLabel: '',
    maxAccessExceededLabel: '',
    tableMetadata: {
      nameLabel: '',
      firstnameLabel: '',
      roleLabel: '',
      phoneLabel: '',
      emailLabel: '',
      actionsLabel: '',
      viewMoreLabel: '',
      viewLessLabel: '',
      maxAccessNumber: 0,
      editIcon: '',
      deleteIcon: '',
      validateIcon: '',
      discardIcon: ''
    }
  },
  error: '',
}

const getAccessManagementState = createFeatureSelector<AccessManagementState>('accessManagement');
export const getAccessManagementItems = createSelector(getAccessManagementState, state => state.accessManagementItems);
export const getAccessManagementMetadata = createSelector(getAccessManagementState, state => state.accessManagementMetadata);

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
  on(AccessManagementAction.loadAccessManagementMetadataSuccess, (state, action): AccessManagementState => {
    return {
      ...state,
      accessManagementMetadata: action.accessManagementMetadata,
      error: '',
    }
  }),
  on(AccessManagementAction.loadAccessManagementMetadataFailure, (state, action): AccessManagementState => {
    return {
      ...state,
      accessManagementMetadata: {
        title: '',
        accessQuestionLabel: '',
        newAccessLabel: '',
        accessWarningLabel: '',
        updateAccessLabel: '',
        noAccessToDisplayLabel: '',
        maxAccessExceededLabel: '',
        tableMetadata: {
          nameLabel: '',
          firstnameLabel: '',
          roleLabel: '',
          phoneLabel: '',
          emailLabel: '',
          actionsLabel: '',
          viewMoreLabel: '',
          viewLessLabel: '',
          maxAccessNumber: 0,
          editIcon: '',
          deleteIcon: '',
          validateIcon: '',
          discardIcon: ''
        }
      },
      error: action.error,
    }
  })
  )
