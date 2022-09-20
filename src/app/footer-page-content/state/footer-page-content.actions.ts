import { createAction, props } from "@ngrx/store";
import { FooterPageContent } from "../footer-page-content";

export const loadFooter = createAction('[FOOTER] LOAD FOOTER DATA', props<{footer: string}>());
export const loadFooterSuccess = createAction('[FOOTER] LOAD FOOTER DATA SUCCESS', props<{footerPageContent: FooterPageContent}>());
export const loadFooterFailure = createAction('[FOOTER] LOAD FOOTER DATA FAILURE', props<{error: string}>());
