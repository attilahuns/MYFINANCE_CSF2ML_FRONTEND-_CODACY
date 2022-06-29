import { createAction, props } from "@ngrx/store";
import { Information, InformationData } from "../information";

export const loadInformation = createAction('[INFORMATION] LOAD INFORMATION DATA');
export const loadInformationSuccess = createAction('[INFORMATION] LOAD INFORMATION DATA SUCCESS', props<{informations: Information[]}>());
export const loadInformationFailure = createAction('[INFORMATION] LOAD INFORMATION DATA FAILURE', props<{error: string}>());
