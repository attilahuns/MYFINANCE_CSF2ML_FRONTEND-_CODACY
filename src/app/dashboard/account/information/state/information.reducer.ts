import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Information } from "../information";
import * as InformationAction from "./information.actions";

export interface State extends AppState {
  information: informationState
}
export interface informationState {
  informations: Information[],
  error: string;
}
export const informationInitialState: informationState = {
  informations: [],
  error: '',
}

const getinformationState = createFeatureSelector<informationState>('information');
export const getInformations = createSelector(getinformationState, state => state.informations);

export const informationReducer = createReducer<informationState>(
  informationInitialState,
  on(InformationAction.loadInformationSuccess, (state, action): informationState => {
    return {
      ...state,
      informations: action.informations,
      error: '',
    }
  }),
  on(InformationAction.loadInformationFailure, (state, action): informationState => {
    return {
      ...state,
      informations: [],
      error: action.error,
    }
  }),
)
