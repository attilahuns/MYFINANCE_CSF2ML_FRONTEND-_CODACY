import { createAction, props } from "@ngrx/store";
import { Homepage, HomepageMetada } from "../homepage";

export const loadHomepageData = createAction('[HOMEPAGE] LOAD HOMEPAGE DATA');
export const loadHomepageDataSuccess = createAction('[HOMEPAGE] LOAD HOMEPAGE DATA SUCCESS', props<{homepage: Homepage}>());
export const loadHomepageDataFailure = createAction('[HOMEPAGE] LOAD HOMEPAGE DATA FAILURE', props<{error: string}>());

export const loadHomepageMetadata = createAction('[HOMEPAGE] LOAD HOMEPAGE METADATA');
export const loadHomepageMetadataSuccess = createAction('[HOMEPAGE] LOAD HOMEPAGE METADATA SUCCESS', props<{homepageMetadata: HomepageMetada}>());
export const loadHomepageMetadataFailure = createAction('[HOMEPAGE] LOAD HOMEPAGE METADATA FAILURE', props<{error: string}>());
