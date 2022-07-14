import { createAction, props } from "@ngrx/store";
import { ContractDetail } from "../contractDetail";

export const loadContractDetail = createAction('[ContractDetail] LOAD ContractDetail DATA');
export const loadContractDetailSuccess = createAction('[ContractDetail] LOAD CONTRACT DETAILS DATA SUCCESS', props<{contractDetails: ContractDetail[]}>());
export const loadContractDetailFailure = createAction('[ContractDetail] LOAD CCONTRACT DETAILS DATA FAILURE', props<{error: string}>());
