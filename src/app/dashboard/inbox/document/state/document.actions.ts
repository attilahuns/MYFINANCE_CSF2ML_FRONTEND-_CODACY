import { createAction, props } from "@ngrx/store";
import { Document } from "../document";

export const loadDocument = createAction('[DOCUMENT] LOAD DOCUMENT DATA');
export const loadDocumentSuccess = createAction('[DOCUMENT] LOAD DOCUMENT DATA SUCCESS', props<{documents: Document[]}>());
export const loadDocumentFailure = createAction('[DOCUMENT] LOAD DOCUMENT DATA FAILURE', props<{error: string}>());
