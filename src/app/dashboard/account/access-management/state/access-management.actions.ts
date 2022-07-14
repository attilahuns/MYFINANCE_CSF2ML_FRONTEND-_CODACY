import { createAction, props } from "@ngrx/store";
import { AccessManagement } from "../access-management";

export const loadAccessManagementItems = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA');
export const loadAccessManagementItemsSuccess = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA SUCCESS', props<{accessManagementItems: AccessManagement[]}>());
export const loadAccessManagementItemsFailure = createAction('[ACCESS_MANAGEMENT] LOAD ACCESS_MANAGEMENT DATA FAILURE', props<{error: string}>());
