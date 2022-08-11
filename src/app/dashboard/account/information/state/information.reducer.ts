import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { InformationData, InformationMetadata } from "../information";
import * as InformationAction from "./information.actions";

export interface State extends AppState {
  information: informationState
}
export interface informationState {
  informations: InformationData,
  metadata: InformationMetadata,
  error: string;
}
export const informationInitialState: informationState = {
  informations: {
    firstname: '',
    lastname: '',
    address: '',
    country: '',
    drivingLicence: '',
    passport: '',
    idCard: '',
    phoneNumber: '',
    email: '',
  },
  metadata: {
    title: '',
    generalInformation: {
      title: '',
      firstnameLabel: '',
      lastnameLabel: '',
      addressLabel: '',
      countryLabel: '',
      drivingLicenceLabel: '',
      passportLabel: '',
      idCardLabel: ''
    },
    contactInformation: {
      title: '',
      phoneNumberLabel: '',
      emailLabel: '',
    },
    updateInformation: '',
    communicationMetadata: {
      title: ''
    }
  },
  error: '',
}

const getinformationState = createFeatureSelector<informationState>('information');
export const getInformations = createSelector(getinformationState, state => state.informations);
export const getInformationsMetadata = createSelector(getinformationState, state => state.metadata);
export const getInformationsError = createSelector(getinformationState, state => state.error);

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
      informations: {
        firstname: '',
        lastname: '',
        address: '',
        country: '',
        drivingLicence: '',
        passport: '',
        idCard: '',
        phoneNumber: '',
        email: '',
      },
      error: action.error,
    }
  }),
  on(InformationAction.loadInformationMetadataSuccess, (state, action): informationState => {
    return {
      ...state,
      metadata: action.metadata,
      error: '',
    }
  }),
  on(InformationAction.loadInformationMetadataFailure, (state, action): informationState => {
    return {
      ...state,
      metadata: {
        title: '',
        generalInformation: {
          title: '',
          firstnameLabel: '',
          lastnameLabel: '',
          addressLabel: '',
          countryLabel: '',
          drivingLicenceLabel: '',
          passportLabel: '',
          idCardLabel: ''
        },
        contactInformation: {
          title: '',
          phoneNumberLabel: '',
          emailLabel: '',
        },
        updateInformation: '',
        communicationMetadata: {
          title: ''
        }
      },
      error: action.error,
    }
  }),
)
