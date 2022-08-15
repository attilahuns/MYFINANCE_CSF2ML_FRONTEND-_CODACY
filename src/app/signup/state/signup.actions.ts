import { createAction, props } from "@ngrx/store";
import { SignupMetadata } from "../signup";

export const loadSignupMetadata = createAction('[SIGNUP] LOAD SIGNUP METADATA');
export const loadSignupMetadataSuccess = createAction('[SIGNUP] LOAD SIGNUP METADATA SUCCESS', props<{metadata: SignupMetadata}>());
export const loadSignupMetadataFailure = createAction('[SIGNUP] LOAD SIGNUP METADATA FAILURE', props<{error: string}>());
