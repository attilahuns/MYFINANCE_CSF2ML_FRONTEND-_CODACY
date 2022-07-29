import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Request, RequestForm } from "../request";
import * as RequestAction from "./request.actions";

export interface State extends AppState {
  request: RequestState
}
export interface RequestState {
  requests: Request[],
  requestForms: RequestForm[],
  error: string;
}
export const requestInitialState: RequestState = {
  requests: [],
  requestForms: [],
  error: '',
}

const getRequestState = createFeatureSelector<RequestState>('request');
export const getrequests = createSelector(getRequestState, state => state.requests);
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
