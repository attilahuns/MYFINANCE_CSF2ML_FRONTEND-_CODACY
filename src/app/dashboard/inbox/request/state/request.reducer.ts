import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Request } from "../request";
import * as RequestAction from "./request.actions";

export interface State extends AppState {
  request: RequestState
}
export interface RequestState {
  requests: Request[],
  error: string;
}
export const requestInitialState: RequestState = {
  requests: [],
  error: '',
}

const getRequestState = createFeatureSelector<RequestState>('request');
export const getrequests = createSelector(getRequestState, state => state.requests);

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
)
