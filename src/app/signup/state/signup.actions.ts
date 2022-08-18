import { createAction, props } from "@ngrx/store";
import { SignupCompleteBusinessMetadata, SignupCompleteMetadata, SignupCompletePersonalMetadata, SignupMetadata } from "../signup";

export const loadSignupMetadata = createAction('[SIGNUP] LOAD SIGNUP METADATA');
export const loadSignupMetadataSuccess = createAction('[SIGNUP] LOAD SIGNUP METADATA SUCCESS', props<{metadata: SignupMetadata}>());
export const loadSignupMetadataFailure = createAction('[SIGNUP] LOAD SIGNUP METADATA FAILURE', props<{error: string}>());

export const loadSignupCompleteMetadata = createAction('[SIGNUP] LOAD SIGNUP COMPLETE METADATA', props<{client: string}>());
export const loadSignupCompleteMetadataSuccess = createAction('[SIGNUP] LOAD SIGNUP METADATA COMPLETE SUCCESS', props<{metadata: SignupCompleteMetadata}>());
export const loadSignupCompleteMetadataFailure = createAction('[SIGNUP] LOAD SIGNUP METADATA COMPLETE FAILURE', props<{error: string}>())
