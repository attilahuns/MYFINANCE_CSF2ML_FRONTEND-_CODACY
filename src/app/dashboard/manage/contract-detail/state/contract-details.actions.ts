import { createAction, props } from "@ngrx/store";
import { ContractDetail, ContractDetailMetadata } from "../contractDetail";

export const loadContractDetail = createAction('[ContractDetail] LOAD ContractDetail DATA');
export const loadContractDetailSuccess = createAction('[ContractDetail] LOAD CONTRACT DETAILS DATA SUCCESS', props<{contractDetails: ContractDetail[]}>());
export const loadContractDetailFailure = createAction('[ContractDetail] LOAD CCONTRACT DETAILS DATA FAILURE', props<{error: string}>());

export const loadContractDetailMetadata = createAction('[ContractDetail] LOAD ContractDetail METADATA');
export const loadContractDetailMetadataSuccess = createAction('[ContractDetail] LOAD CONTRACT DETAILS METADATA SUCCESS', props<{contractDetailMetadata: ContractDetailMetadata}>());
export const loadContractDetailMetadataFailure = createAction('[ContractDetail] LOAD CCONTRACT DETAILS METADATA FAILURE', props<{error: string}>());