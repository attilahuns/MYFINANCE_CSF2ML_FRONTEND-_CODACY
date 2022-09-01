import { createAction, props } from "@ngrx/store";
import { FaqMetadata } from "../faq";

export const loadFaqMetadata = createAction('[FAQ] LOAD FAQ METADATA');
export const loadFaqMetadataSuccess = createAction('[FAQ] LOAD FAQ METADATA SUCCESS', props<{faqMetadata: FaqMetadata}>());
export const loadFaqMetadataFailure = createAction('[FAQ] LOAD FAQ METADATA FAILURE', props<{error: string}>());
