import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { Document, DocumentMetadata } from "../document";
import * as DocumentAction from "./document.actions";

export interface State extends AppState {
  document: DocumentState
}
export interface DocumentState {
  documents: Document[],
  metadata: DocumentMetadata,
  error: string;
}
export const documentInitialState: DocumentState = {
  documents: [],
  metadata: {
    title: '',
    viewLessLabel: '',
    viewMoreLabel: '',
    displayedRowsLimit: 5,
    emptyDocumentListMessage: '',
    documentListNotFound: '',
    downloadCTALabel: '',
    tableMetadata: {
      documentTypeLabel: '',
      dateLabel: '',
      financeProductLabel: '',
      contractLabel: '',
      vehicleLabel: '',
      registrationNumberLabel: '',
      downloadColumn: {
        label: '',
        picto: '',
        alt: ''
      },
      viewColumn: {
        label: '',
        picto: '',
        alt: ''
      }
    },
    communicationMetadata: {
      title: ''
    }
  },
  error: '',
}

const getDocumentState = createFeatureSelector<DocumentState>('document');
export const getdocuments = createSelector(getDocumentState, state => state.documents);
export const getDocumentsMetadata = createSelector(getDocumentState, state => state.metadata);
export const getDocumentsError = createSelector(getDocumentState, state => state.error);
export const getDocumentDetailMetadata = createSelector(getDocumentState, state => state.metadata.downloadCTALabel);

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
  on(DocumentAction.loadDocumentMetadataSuccess, (state, action): DocumentState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(DocumentAction.loadDocumentMetadataFailure, (state, action): DocumentState => {
    return {
      ...state,
      metadata: {
        title: '',
        viewLessLabel: '',
        viewMoreLabel: '',
        displayedRowsLimit: 5,
        emptyDocumentListMessage: '',
        documentListNotFound: '',
        downloadCTALabel: '',
        tableMetadata: {
          documentTypeLabel: '',
          dateLabel: '',
          financeProductLabel: '',
          contractLabel: '',
          vehicleLabel: '',
          registrationNumberLabel: '',
          downloadColumn: {
            label: '',
            picto: '',
            alt: ''
          },
          viewColumn: {
            label: '',
            picto: '',
            alt: ''
          }
        },
        communicationMetadata: {
          title: ''
        }
      },
      error: action.error,
    }
  }),
)
