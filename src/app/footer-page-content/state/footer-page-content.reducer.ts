import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { FooterPageContent } from "../footer-page-content";
import * as FooterContentAction from "./footer-page-content.actions";

export interface State extends AppState {
  footerPageContent: FooterPageContentState
}
export interface FooterPageContentState {
  footerPageContent: FooterPageContent,
  error: string;
}
export const footerPageContentInitialState: FooterPageContentState = {
  footerPageContent: {
    title: '',
  },
  error: '',
}

const getFooterPageContentState = createFeatureSelector<FooterPageContentState>('footerPageContent');
export const getFooterPageContent = createSelector(getFooterPageContentState, state => state.footerPageContent);

export const footerPageContentReducer = createReducer<FooterPageContentState>(
  footerPageContentInitialState,
  on(FooterContentAction.loadFooterSuccess, (state, action): FooterPageContentState => {
    return {
      ...state,
      footerPageContent: action.footerPageContent,
      error: '',
    }
  }),
  on(FooterContentAction.loadFooterFailure, (state, action): FooterPageContentState => {
    return {
      ...state,
      footerPageContent: {
        title: '',
      },
      error: action.error,
    }
  }),
);
