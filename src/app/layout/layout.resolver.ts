import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, first, map, Observable, tap } from 'rxjs';

import * as LayoutAction from "./state/layout.actions";
import { getFooterItems, getHeaderItems, getSidenavMenuItems } from './state/layout.reducer';

@Injectable({
  providedIn: 'root'
})
export class LayoutResolver implements Resolve<boolean> {

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(LayoutAction.loadHeaderItems());
    this.store.dispatch(LayoutAction.loadFooterItems());
    this.store.dispatch(LayoutAction.loadSidenavMenuItems());
    this.store.dispatch(LayoutAction.loadBannerItems());

    return combineLatest([this.store.select(getFooterItems), this.store.select(getSidenavMenuItems), this.store.select(getHeaderItems)]).pipe(
      map(([footer, menu, header]) => !!footer.length && !!menu.length && !!header.length),
      filter((proceed) => proceed),
      first(),
    );
  }

}
