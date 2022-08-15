import { createAction, props } from "@ngrx/store";
import { SignInMetadata } from "../signin";

export const loadSigninMetadata = createAction('[SIGNIN] LOAD SIGNIN METADATA');
export const loadSigninMetadataSuccess = createAction('[SIGNIN] LOAD SIGNIN METADATA SUCCESS', props<{metadata: SignInMetadata}>());
export const loadSigninMetadataFailure = createAction('[SIGNIN] LOAD SIGNIN METADATA FAILURE', props<{error: string}>());
