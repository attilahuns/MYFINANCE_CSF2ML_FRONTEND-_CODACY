import { createAction, props } from "@ngrx/store";
import { Help } from "../help";

export const loadHelp = createAction('[HELP] LOAD HELP', props<{helpType: string}>());
export const loadHelpSuccess = createAction('[HELP] LOAD HELP SUCCESS', props<{help: Help}>());
export const loadHelpFailure = createAction('[HELP] LOAD HELP FAILURE', props<{error: string}>());
