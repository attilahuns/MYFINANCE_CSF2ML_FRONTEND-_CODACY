import { createAction, props } from "@ngrx/store";
import { AccessManagementEnterprise, AccessManagementEnterpriseMetadata } from "../access-management-entreprise";

export const loadAccessManagementEnterpriseItems = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE DATA');
export const loadAccessManagementEnterpriseItemsSuccess = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE DATA SUCCESS', props<{accessManagementEnterpriseItems: AccessManagementEnterprise[]}>());
export const loadAccessManagementEnterpriseItemsFailure = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD AACCES_MANAGEMENT_ENTERPRISE DATA FAILURE', props<{error: string}>());

export const loadAccessManagementEnterpriseMetadata = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE METADATA');
export const loadAccessManagementEnterpriseMetadataSuccess = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE METADATA SUCCESS', props<{accessManagementEnterpriseMetadata: AccessManagementEnterpriseMetadata}>());
export const loadAccessManagementEnterpriseMetadataFailure = createAction('[ACCESS_MANAGEMENT_ENTERPRISE] LOAD ACCESS_MANAGEMENT_ENTERPRISE METADATA FAILURE', props<{error: string}>());
