import { createAction, props } from "@ngrx/store";
import { Document, DocumentMetadata, TranscodingTable } from "../document";

export const loadDocument = createAction('[DOCUMENT] LOAD DOCUMENT DATA');
export const loadDocumentSuccess = createAction('[DOCUMENT] LOAD DOCUMENT DATA SUCCESS', props<{documents: Document[]}>());
export const loadDocumentFailure = createAction('[DOCUMENT] LOAD DOCUMENT DATA FAILURE', props<{error: string}>());

export const loadDocumentMetadata = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA');
export const loadDocumentMetadataSuccess = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA SUCCESS', props<{metadata: DocumentMetadata}>());
export const loadDocumentMetadataFailure = createAction('[DOCUMENT METADATA] LOAD DOCUMENT METADATA FAILURE', props<{error: string}>());

export const loadTranscodingTable = createAction('[TRANSCODING TABLE] LOAD TRANSCODING TABLE DATA');
export const loadTranscodingTableSuccess = createAction('[TRANSCODING TABLE] LOAD TRANSCODING TABLE DATA SUCCESS', props<{transcodingTable: TranscodingTable[]}>());
export const loadTranscodingTableFailure = createAction('[TRANSCODING TABLE] LOAD TRANSCODING TABLE DATA FAILURE', props<{error: string}>());
