import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FooterService } from 'src/app/shared/footer/footer.service';
import { LayoutService } from '../layout.service';
import * as LayoutActions from './layout.actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutEffect {

  loadheaderItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(LayoutActions.loadHeaderItems),
      mergeMap(() => this.layoutService.getHeaderItems().pipe(
        map(headerItems => LayoutActions.loadHeaderItemsSuccess({headerItems})),
        catchError(error => {
          return of(LayoutActions.loadHeaderItemsFailure({error}))
        })
      ))
    )
  });

  loadfooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(LayoutActions.loadFooterItems),
      mergeMap(() => this.footerService.getFooterItems().pipe(
        map(footerItems => LayoutActions.loadFooterItemsSuccess({footerItems})),
        catchError(error => {
          return of(LayoutActions.loadFooterItemsFailure({error}))
        })
      ))
    )
  });

  loadSidenavMenuItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(LayoutActions.loadSidenavMenuItems),
      mergeMap(() => this.layoutService.getSidenavMenuItems().pipe(
        map(sidenavMenuItems => LayoutActions.loadSidenavMenuItemsSuccess({sidenavMenuItems})),
        catchError(error => {
          return of(LayoutActions.loadSidenavMenuItemsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private footerService: FooterService, private layoutService: LayoutService) { }
}
