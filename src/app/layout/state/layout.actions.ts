import { createAction, props } from "@ngrx/store";
import { FooterItem } from "../../shared/footer/footer-item";
import { SidenavMenuItem } from "../sidenav/sidenav-menu-item";

export const loadFooterItems = createAction('[FOOTER] LOAD ITEMS');
export const loadFooterItemsSuccess = createAction('[FOOTER] LOAD ITEMS SUCCESS', props<{footerItems: FooterItem[]}>());
export const loadFooterItemsFailure = createAction('[FOOTER] LOAD ITEMS FAILURE', props<{error: string}>());

export const loadSidenavMenuItems = createAction('[SIDENAV MENU] LOAD ITEMS');
export const loadSidenavMenuItemsSuccess = createAction('[SIDENAV MENU] LOAD ITEMS SUCCESS', props<{sidenavMenuItems: SidenavMenuItem[]}>());
export const loadSidenavMenuItemsFailure = createAction('[SIDENAV MENU] LOAD ITEMS FAILURE', props<{error: string}>());

export const openSidenavMenu = createAction('[SIDENAV MENU] OPEN SIDENAV MENU');
export const closeSidenavMenu = createAction('[SIDENAV MENU] CLOSE SIDENAV MENU');
export const toggleSidenavMenu = createAction('[SIDENAV MENU] TOGGLE SIDENAV MENU');

