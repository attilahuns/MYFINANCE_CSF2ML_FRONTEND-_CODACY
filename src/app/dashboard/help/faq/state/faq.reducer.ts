import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { FaqMetadata } from "../faq";
import * as FaqAction from "./faq.actions";

export interface State extends AppState {
  faq: FaqState
}
export interface FaqState {
  faqMetadata: FaqMetadata,
  error: string,
}
export const faqInitialState: FaqState = {
  faqMetadata: {
    title: '',
    voteMetadata: {
      question: '',
      yesLabel: '',
      noLabel: '',
      submitCtaLabel: ''
    },
  },
  error: '',
}

const getfaqState = createFeatureSelector<FaqState>('faq');
export const getFaqMetadata = createSelector(getfaqState, state => state.faqMetadata);
export const getFaqError = createSelector(getfaqState, state => state.error);

export const faqReducer = createReducer<FaqState>(
  faqInitialState,
  on(FaqAction.loadFaqMetadataSuccess, (state, action): FaqState => {
    return {
      ...state,
      faqMetadata: action.faqMetadata,
      error: '',
    }
  }),
  on(FaqAction.loadFaqMetadataFailure, (state, action): FaqState => {
    return {
      ...state,
      faqMetadata: {
        title: '',
        voteMetadata: {
          question: '',
          yesLabel: '',
          noLabel: '',
          submitCtaLabel: ''
        },
      },
      error: action.error,
    }
  }),
)
