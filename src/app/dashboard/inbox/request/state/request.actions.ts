import { createAction, props } from "@ngrx/store";
import { Request, RequestMetadata, RequestForm } from "../request";

export const loadRequest = createAction('[REQUEST] LOAD REQUEST DATA');
export const loadRequestSuccess = createAction('[REQUEST] LOAD REQUEST DATA SUCCESS', props<{requests: Request[]}>());
export const loadRequestFailure = createAction('[REQUEST] LOAD REQUEST DATA FAILURE', props<{error: string}>());

export const loadRequestMetadata = createAction('[REQUEST] LOAD REQUEST METADATA');
export const loadRequestMetadataSuccess = createAction('[REQUEST] LOAD REQUEST METADATA SUCCESS', props<{metadata: RequestMetadata}>());
export const loadRequestMetadataFailure = createAction('[REQUEST] LOAD REQUEST METADATA FAILURE', props<{error: string}>());

export const loadRequestForms = createAction('[REQUEST FORMS] LOAD REQUEST FORMS DATA');
export const loadRequestFormsSuccess = createAction('[REQUEST FORMS] LOAD REQUEST FORMS DATA SUCCESS', props<{requestForms: RequestForm[]}>());
export const loadRequestFormsFailure = createAction('[REQUEST FORMS] LOAD REQUEST FORMS DATA FAILURE', props<{error: string}>());

