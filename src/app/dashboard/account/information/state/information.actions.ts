import { createAction, props } from "@ngrx/store";
import { InformationData, InformationMetadata } from "../information";

export const loadInformation = createAction('[INFORMATION] LOAD INFORMATION DATA');
export const loadInformationSuccess = createAction('[INFORMATION] LOAD INFORMATION DATA SUCCESS', props<{informations: InformationData}>());
export const loadInformationFailure = createAction('[INFORMATION] LOAD INFORMATION DATA FAILURE', props<{error: string}>());

export const loadInformationMetadata = createAction('[INFORMATION] LOAD INFORMATION METADATA');
export const loadInformationMetadataSuccess = createAction('[INFORMATION] LOAD INFORMATION METADATA SUCCESS', props<{metadata: InformationMetadata}>());
export const loadInformationMetadataFailure = createAction('[INFORMATION] LOAD INFORMATION METADATA FAILURE', props<{error: string}>());
