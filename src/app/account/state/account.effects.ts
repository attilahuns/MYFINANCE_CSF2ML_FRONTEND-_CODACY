import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FooterService } from 'src/app/shared/footer/footer.service';
import { AccountFooterItem } from '../account-footer-item';
import { AccountServiceItem } from '../account-service-item';
import * as AccountAction from './account.actions';

@Injectable({
  providedIn: 'root'
})
export class AccountEffect {

  private services: AccountServiceItem[] = [
    {
      icon: 'pen',
      title: 'View amend and manage your agreement details'
    },
    {
      icon: 'save',
      title: 'View and download documents'
    },
    {
      icon: 'mode_regulation',
      title: 'Change your scheduled payment date'
    },
    {
      icon: 'profile',
      title: 'View and update your personal details'
    },
    {
      icon: 'chatbox',
      title: 'Speak with our team via live chat'
    },
  ];

  private footerItems: AccountFooterItem[] = [
    {
      href: '',
      label: 'Help',
    },
  ];

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

  loadAccountServiceItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccountAction.loadAccountServiceItems),
      mergeMap(() => of(this.services).pipe(
        map(accountServiceItems => AccountAction.loadAccountServiceItemsSuccess({accountServiceItems})),
        catchError(error => {
          return of(AccountAction.loadAccountServiceItemsFailure({error}))
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

  constructor(private actions: Actions, private footerService: FooterService) { }
}
