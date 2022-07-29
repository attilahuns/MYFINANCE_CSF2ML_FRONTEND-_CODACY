import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Request, RequestForm, RequestMetadata } from "../request";
import * as RequestAction from "./request.actions";

export interface State extends AppState {
  request: RequestState
}
export interface RequestState {
  requests: Request[],
  metadata: RequestMetadata,
  requestForms: RequestForm[],
  error: string;
}
export const requestInitialState: RequestState = {
  requests: [],
  metadata: {
    title: '',
    ctaNewRequest: {
      label: '',
      url: '',
    },
    requestsLabel: '',
    requestDetailsLabel: '',
    statusLabel: '',
    dateSubmittedLabel: '',
    viewLessLabel: '',
    viewMoreLabel: '',
    displayedRowsLimit: 5,
    emptyRequestListMessage: '',
    emptyListMessage: ''
  },
  requestForms: [],
  error: '',
}

const getRequestState = createFeatureSelector<RequestState>('request');
export const getRequestsData = createSelector(getRequestState, state => state.requests);
export const getRequestsMetadata = createSelector(getRequestState, state => state.metadata);
export const getRequestsError = createSelector(getRequestState, state => state.error);
export const getrequestForms = createSelector(getRequestState, state => state.requestForms);

export const requestReducer = createReducer<RequestState>(
  requestInitialState,
  on(RequestAction.loadRequestSuccess, (state, action): RequestState => {
    return {
      ...state,
      requests: action.requests,
      error: '',
    }
  }),
  on(RequestAction.loadRequestFailure, (state, action): RequestState => {
    return {
      ...state,
      requests: [],
      error: action.error,
    }
  }),
  on(RequestAction.loadRequestMetadataSuccess, (state, action): RequestState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(RequestAction.loadRequestMetadataFailure, (state, action): RequestState => {
    return {
      ...state,
      metadata: {
        title: '',
        ctaNewRequest: {
          label: '',
          url: '',
        },
        requestsLabel: '',
        requestDetailsLabel: '',
        statusLabel: '',
        dateSubmittedLabel: '',
        viewLessLabel: '',
        viewMoreLabel: '',
        displayedRowsLimit: 5,
        emptyRequestListMessage: '',
        emptyListMessage: ''
      },
      error: action.error,
    }
  }),
  
  on(RequestAction.loadRequestFormsSuccess, (state, action): RequestState => {
    return {
      ...state,
      requestForms: action.requestForms,
      error: '',
    }
  }),
  on(RequestAction.loadRequestFormsFailure, (state, action): RequestState => {
    return {
      ...state,
      requestForms: [],
      error: action.error,
    }
  }),
)
