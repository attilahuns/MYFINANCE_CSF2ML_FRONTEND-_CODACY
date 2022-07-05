import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SidenavMenuItem } from '../sidenav/sidenav-menu-item';
import * as LayoutActions from './layout.actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutEffect {

  private menuItems: SidenavMenuItem[] = [
    {
      title: 'Dashboard',
      path: 'home',
      icon: 'home picto',
      notification: false,
    },
    {
      title: 'Inbox',
      path: 'inbox',
      icon: 'message picto',
      notification: false,
      subMenu: [
        {
          title: 'Message',
          path: 'message',
          notification: false,
        },
        {
          title: 'Requests',
          path: 'inbox/requests',
          notification: false,
        },
        {
          title: 'Documents',
          path: 'inbox/documents',
          notification: false,
        }
      ],
    },
    {
      title: 'Manage',
      path: 'manage',
      icon: 'message picto',
      notification: false,
      subMenu: [
        {
          title: 'Finance applications',
          path: 'finance',
          notification: false,
        },
        {
          title: 'Agreements',
          path: 'manage/agreements',
          notification: false,
        },
        {
          title: 'Overdue',
          path: 'overdue',
          notification: false,
        }
      ],
    },
    {
      title: 'Account',
      path: 'account',
      icon: 'account picto',
      notification: false,
      subMenu: [
        {
          title: 'Information',
          path: 'account/information',
          notification: false,
        },
        {
          title: 'Bank details',
          path: 'account/bank-details',
          notification: false,
        },
        {
          title: 'Preferences',
          path: 'preferences',
          notification: false,
        }
      ],
    },
    {
      title: 'Help',
      path: 'help',
      icon: 'message picto',
      notification: false,
      subMenu: [
        {
          title: 'FAQ',
          path: 'help/faq',
          notification: false,
        },
        {
          title: 'Contact us',
          path: 'help/contact',
          notification: false,
        }
      ],
    }
  ];

  loadfooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(LayoutActions.loadFooterItems),
      mergeMap(() => of([
        { label: 'Welcome page', href: '/welcome' },
        { label: 'Legals', href: '/legal' },
        { label: 'Cookies reglementations', href: '' },
        { label: 'Personal data', href: '' },
      ]).pipe(
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
      mergeMap(() => of(this.menuItems).pipe(
        map(sidenavMenuItems => LayoutActions.loadSidenavMenuItemsSuccess({sidenavMenuItems})),
        catchError(error => {
          return of(LayoutActions.loadSidenavMenuItemsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
