import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Document } from "../document";
import * as DocumentAction from "./document.actions";

export interface State extends AppState {
  document: DocumentState
}
export interface DocumentState {
  documents: Document[],
  error: string;
}
export const documentInitialState: DocumentState = {
  documents: [],
  error: '',
}

const getDocumentState = createFeatureSelector<DocumentState>('document');
export const getdocuments = createSelector(getDocumentState, state => state.documents);

export const documentReducer = createReducer<DocumentState>(
  documentInitialState,
  on(DocumentAction.loadDocumentSuccess, (state, action): DocumentState => {
    return {
      ...state,
      documents: action.documents,
      error: '',
    }
  }),
  on(DocumentAction.loadDocumentFailure, (state, action): DocumentState => {
    return {
      ...state,
      documents: [],
      error: action.error,
    }
  }),
)
