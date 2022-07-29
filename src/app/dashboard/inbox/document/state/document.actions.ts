import { createAction, props } from "@ngrx/store";
import { Document, DocumentMetadata } from "../document";

export const loadDocument = createAction('[DOCUMENT] LOAD DOCUMENT DATA');
export const loadDocumentSuccess = createAction('[DOCUMENT] LOAD DOCUMENT DATA SUCCESS', props<{documents: Document[]}>());
export const loadDocumentFailure = createAction('[DOCUMENT] LOAD DOCUMENT DATA FAILURE', props<{error: string}>());

export const loadDocumentMetadata = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA');
export const loadDocumentMetadataSuccess = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA SUCCESS', props<{metadata: DocumentMetadata}>());
export const loadDocumentMetadataFailure = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA FAILURE', props<{error: string}>());
