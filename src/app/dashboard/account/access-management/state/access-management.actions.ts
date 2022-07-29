import { createAction, props } from "@ngrx/store";
import { AccessManagement, AccessManagementMetadata } from "../access-management";

export const loadAccessManagementItems = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA');
export const loadAccessManagementItemsSuccess = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA SUCCESS', props<{accessManagementItems: AccessManagement[]}>());
export const loadAccessManagementItemsFailure = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA FAILURE', props<{error: string}>());

export const loadAccessManagementMetadata = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT METADATA');
export const loadAccessManagementMetadataSuccess = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT METADATA SUCCESS', props<{accessManagementMetadata: AccessManagementMetadata}>());
export const loadAccessManagementMetadataFailure = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT METADATA FAILURE', props<{error: string}>());
