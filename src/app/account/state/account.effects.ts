import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FooterService } from 'src/app/shared/footer/footer.service';
import { AccountFooterItem } from '../account-footer-item';
import { AccountService } from '../account.service';
import * as AccountAction from './account.actions';

@Injectable({
  providedIn: 'root'
})
export class AccountEffect {

  private footerItems: AccountFooterItem[] = [
    {
      href: '',
      label: 'Help',
    },
  ];

  loadAccountMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccountAction.loadAccountMetadata),
      mergeMap((action) => this.accountService.getMetadata(action.page).pipe(
        map(metadata => AccountAction.loadAccountMetadataSuccess({metadata})),
        catchError(error => {
          return of(AccountAction.loadAccountMetadataFailure({error}))
        })
      ))
    )
  });

  loadfooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccountAction.loadFooterItems),
      mergeMap(() => this.footerService.getFooterItems().pipe(
        map(footerItems => AccountAction.loadFooterItemsSuccess({footerItems})),
        catchError(error => {
          return of(AccountAction.loadFooterItemsFailure({error}))
        })
      ))
    )
  });

  loadAccountFooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccountAction.loadAccountFooterItems),
      mergeMap(() => of(this.footerItems).pipe(
        map(accountFooterItems => AccountAction.loadAccountFooterItemsSuccess({accountFooterItems})),
        catchError(error => {
          return of(AccountAction.loadAccountFooterItemsFailure({error}))
        })
      ))
    )
  });

  loadOtpMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccountAction.loadOtpMetadata),
      mergeMap(() => this.accountService.getOtpMetadata().pipe(
        map(metadata => AccountAction.loadOtpMetadataSuccess({metadata})),
        catchError(error => {
          return of(AccountAction.loadOtpMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private accountService: AccountService, private footerService: FooterService) { }
}
