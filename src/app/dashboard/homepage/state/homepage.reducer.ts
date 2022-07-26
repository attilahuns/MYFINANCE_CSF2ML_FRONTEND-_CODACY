import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Homepage, HomepageMetada } from "../homepage";
import * as HomepageAction from "./homepage.actions";

export interface State extends AppState {
  homepage: HomepageState
}
export interface HomepageState {
  homepage: Homepage,
  homepageMetadata: HomepageMetada,
  error: string,
}
export const homepageInitialState: HomepageState = {
  homepage: {
    agreements: [],
    documents: [],
    requests: [],
  },
  homepageMetadata: {
    title: '',
    message: '',
    agreementMetada: {
      title: '',
      vinLabel: '',
      agreementNumberLabel: '',
      financialProductLabel: '',
    },
    documentMetada: {
      title: '',
      viewIcon: '',
    },
    requestMetada: {
      title: '',
    },
    manageableContentMetada: {
      title: '',
    }
  },
  error: '',
}

const getHomepageState = createFeatureSelector<HomepageState>('homepage');
export const getHomepageData = createSelector(getHomepageState, state => state.homepage);
export const getHomepageMetadata = createSelector(getHomepageState, state => state.homepageMetadata);
export const getHomepageError = createSelector(getHomepageState, state => state.error);

export const homepageReducer = createReducer<HomepageState>(
  homepageInitialState,
  on(HomepageAction.loadHomepageDataSuccess, (state, action): HomepageState => {
    return {
      ...state,
      homepage: action.homepage,
      error: '',
    }
  }),
  on(HomepageAction.loadHomepageDataFailure, (state, action): HomepageState => {
    return {
      ...state,
      homepage: {
        agreements: [],
        documents: [],
        requests: [],
      },
      error: action.error,
    }
  }),
  on(HomepageAction.loadHomepageMetadataSuccess, (state, action): HomepageState => {
    return {
      ...state,
      homepageMetadata: action.homepageMetadata,
      error: '',
    }
  }),
  on(HomepageAction.loadHomepageMetadataFailure, (state, action): HomepageState => {
    return {
      ...state,
      homepageMetadata: {
        title: '',
        message: '',
        agreementMetada: {
          title: '',
          vinLabel: '',
          agreementNumberLabel: '',
          financialProductLabel: '',
        },
        documentMetada: {
          title: '',
          viewIcon: '',
        },
        requestMetada: {
          title: '',
        },
        manageableContentMetada: {
          title: '',
        }
      },
      error: action.error,
    }
  }),
)
