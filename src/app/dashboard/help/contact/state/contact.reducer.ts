import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { ContactMetadata } from "../contact";
import * as ContactAction from "./contact.actions";

export interface State extends AppState {
  contact: ContactState
}
export interface ContactState {
  contactMetadata: ContactMetadata,
  error: string;
}
export const contactInitialState: ContactState = {
  contactMetadata: {
    title: '',
    contactByChat: {
      title: '',
      description: ''
    },
    contactByForm: {
      title: '',
      description: ''
    },
  },
  error: '',
}

const getContactState = createFeatureSelector<ContactState>('contact');
export const getContactMetadata = createSelector(getContactState, state => state.contactMetadata);

export const contactReducer = createReducer<ContactState>(
  contactInitialState,
  on(ContactAction.loadContactMetadataItemsSuccess, (state, action): ContactState => {
    return {
      ...state,
      contactMetadata: action.contactMetadata,
      error: '',
    }
  }),
  on(ContactAction.loadContactMetadataItemsFailure, (state, action): ContactState => {
    return {
      ...state,
      contactMetadata:  {
        title: '',
        contactByChat: {
          title: '',
          description: ''
        },
        contactByForm: {
          title: '',
          description: ''
        },
      },
      error: action.error,
    }
  })
)
