import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, first, map, Observable } from 'rxjs';

import * as LayoutAction from "./state/layout.actions";
import { getFooterItems, getSidenavMenuItems } from './state/layout.reducer';

@Injectable({
  providedIn: 'root'
})
export class LayoutResolver implements Resolve<boolean> {

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(LayoutAction.loadFooterItems());
    this.store.dispatch(LayoutAction.loadSidenavMenuItems());

    return combineLatest([this.store.select(getFooterItems), this.store.select(getSidenavMenuItems)]).pipe(
      filter(([footer, menu]) => footer.length > 0 && menu.length > 0),
      map(([footer, menu]) => footer.length > 0 && menu.length > 0),
      first(),
    );
  }

}
