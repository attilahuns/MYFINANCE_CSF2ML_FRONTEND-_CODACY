import { createAction, props } from "@ngrx/store";
import { ContactMetadata } from "../contact";

export const loadContactMetadataItems = createAction('[CONTACT] LOAD CONTACT METADATA');
export const loadContactMetadataItemsSuccess = createAction('[CONTACT] LOAD CONTACT METADATA SUCCESS', props<{contactMetadata: ContactMetadata}>());
export const loadContactMetadataItemsFailure = createAction('[CONTACT] LOAD CONTACT METADATA FAILURE', props<{error: string}>());


