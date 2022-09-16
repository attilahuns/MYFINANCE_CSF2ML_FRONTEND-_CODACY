import { createAction, props } from "@ngrx/store";
import { AccessManagementEnterprise } from "../access-management-entreprise";

export const loadAccessManagementEnterpriseItems = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE DATA');
export const loadAccessManagementEnterpriseItemsSuccess = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE DATA SUCCESS', props<{accessManagementEnterpriseItems: AccessManagementEnterprise[]}>());
export const loadAccessManagementEnterpriseItemsFailure = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD AACCES_MANAGEMENT_ENTERPRISE DATA FAILURE', props<{error: string}>());
