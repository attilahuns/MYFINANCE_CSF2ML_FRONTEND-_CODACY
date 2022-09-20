import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { AccessManagementEnterprise, AccessManagementEnterpriseMetadata } from "../access-management-entreprise";
import * as AccessManagementEnterpriseAction from "./access-management-enterprise.actions";

export interface State extends AppState {
  accessManagementEnterprise: AccessManagementEnterpriseState
}
export interface AccessManagementEnterpriseState {
  accessManagementEnterpriseItems: AccessManagementEnterprise[],
  accessManagementEnterpriseMetadata: AccessManagementEnterpriseMetadata,
  error: string;
}
export const accessManagementEnterpriseInitialState: AccessManagementEnterpriseState = {
  accessManagementEnterpriseItems: [],
  accessManagementEnterpriseMetadata: {
    title: '',
    accessQuestionLabel: '',
    noAccessToDisplayLabel: '',
    tableMetadata: {
      pivaLabel: '',
      companyNameLabel: '',
      manageAccessesLabel: '',
      manageAccessesCtaLabel: '',
      viewMoreLabel: '',
      viewLessLabel: '',
      maxAccessNumber: 0,
      noAccessToDisplayLabel: ''
    }
  },
  error: '',
}

const getAccessManagementEnterpriseState = createFeatureSelector<AccessManagementEnterpriseState>('accessManagementEnterprise');
export const getAccessManagementEnterpriseMetadata = createSelector(getAccessManagementEnterpriseState, state => state.accessManagementEnterpriseMetadata);
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
  on(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseMetadataSuccess, (state, action): AccessManagementEnterpriseState => {
    return {
      ...state,
      accessManagementEnterpriseMetadata: action.accessManagementEnterpriseMetadata,
      error: '',
    }
  }),
  on(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseMetadataFailure, (state, action): AccessManagementEnterpriseState => {
    return {
      ...state,
      accessManagementEnterpriseMetadata: {
        title: '',
        accessQuestionLabel: '',
        noAccessToDisplayLabel: '',
        tableMetadata: {
          pivaLabel: '',
          companyNameLabel: '',
          manageAccessesLabel: '',
          manageAccessesCtaLabel: '',
          viewMoreLabel: '',
          viewLessLabel: '',
          maxAccessNumber: 0,
          noAccessToDisplayLabel: ''
        }
      },
      error: action.error,
    }
  })
)
