import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Help } from "../help";
import * as HelpAction from "./help.actions";

export interface State extends AppState {
  help: HelpState
}
export interface HelpState {
  help: Help,
  error: string;
}
export const helpInitialState: HelpState = {
  help: {
    title: '',
    body: '',
    label: ''
  },
  error: '',
}

const getHelpState = createFeatureSelector<HelpState>('help');
export const getHelpContent = createSelector(getHelpState, state => state.help);

export const helpReducer = createReducer<HelpState>(
  helpInitialState,
  on(HelpAction.loadHelpSuccess, (state, action): HelpState => {
    return {
      ...state,
      help: action.help,
      error: '',
    }
  }),
  on(HelpAction.loadHelpFailure, (state, action): HelpState => {
    return {
      ...state,
      help: {
        title: '',
        body: '',
        label: ''
      },
      error: action.error,
    }
  }),
);
