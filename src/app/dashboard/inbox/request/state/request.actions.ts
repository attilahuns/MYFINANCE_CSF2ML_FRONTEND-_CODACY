import { createAction, props } from "@ngrx/store";
import { Request } from "../request";

export const loadRequest = createAction('[REQUEST] LOAD REQUEST DATA');
export const loadRequestSuccess = createAction('[REQUEST] LOAD REQUEST DATA SUCCESS', props<{requests: Request[]}>());
export const loadRequestFailure = createAction('[REQUEST] LOAD REQUEST DATA FAILURE', props<{error: string}>());
