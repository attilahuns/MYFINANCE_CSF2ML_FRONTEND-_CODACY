import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { FooterItem } from "../../shared/footer/footer-item";
import { SidenavMenuItem } from "../sidenav/sidenav-menu-item";
import * as LayoutAction from "./layout.actions";

export interface State extends AppState {
  layout: layoutState
}
export interface layoutState {
  sidenavToggle: boolean,
  sidenavMenuItems: SidenavMenuItem[],
  footerItems: FooterItem[],
  error: string;
}
export const LayoutInitialState: layoutState = {
  sidenavToggle: false,
  sidenavMenuItems: [],
  footerItems: [],
  error: '',
}

const getLayoutState = createFeatureSelector<layoutState>('layout');
export const getFooterItems = createSelector(getLayoutState, state => state.footerItems);
export const getSidenavMenuItems = createSelector(getLayoutState, state => state.sidenavMenuItems);
export const getSidenavToggle = createSelector(getLayoutState, state => state.sidenavToggle);

export const layoutReducer = createReducer<layoutState>(
  LayoutInitialState,
  on(LayoutAction.loadFooterItemsSuccess, (state, action): layoutState => {
    return {
      ...state,
      footerItems: action.footerItems,
      error: '',
    }
  }),
  on(LayoutAction.loadFooterItemsFailure, (state, action): layoutState => {
    return {
      ...state,
      footerItems: [],
      error: action.error,
    }
  }),
  on(LayoutAction.loadSidenavMenuItemsSuccess, (state, action): layoutState => {
    return {
      ...state,
      sidenavMenuItems: action.sidenavMenuItems,
      error: '',
    }
  }),
  on(LayoutAction.loadSidenavMenuItemsFailure, (state, action): layoutState => {
    return {
      ...state,
      sidenavMenuItems: [],
      error: action.error,
    }
  }),
  on(LayoutAction.openSidenavMenu, (state): layoutState => {
    return {
      ...state,
      sidenavToggle: true,
    }
  }),
  on(LayoutAction.closeSidenavMenu, (state): layoutState => {
    return {
      ...state,
      sidenavToggle: false,
    }
  }),
  on(LayoutAction.toggleSidenavMenu, (state): layoutState => {
    return {
      ...state,
      sidenavToggle: !state.sidenavToggle,
    }
  }),
)
