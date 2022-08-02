import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Banner } from 'src/app/shared/banner/banner';
import { FooterService } from 'src/app/shared/footer/footer.service';
import { LayoutService } from '../layout.service';
import * as LayoutActions from './layout.actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutEffect {
  private banners: Banner[] = [
    {
      message: "You have an overdue payment of £282.",
      cta: {
        title: "New Request",
        path: "/dashboard/inbox/requests/new",
      }
    },
    {
      message: "Message Banner 1.",
    },
    {
      message: "Message Banner 2.",
    }
  ];
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

  loadBannerItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(LayoutActions.loadBannerItems),
      mergeMap(() => of(this.banners).pipe(
        map(bannerItems => LayoutActions.loadBannerItemsSuccess({bannerItems})),
        catchError(error => {
          return of(LayoutActions.loadBannerItemsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private footerService: FooterService, private layoutService: LayoutService) { }
}
