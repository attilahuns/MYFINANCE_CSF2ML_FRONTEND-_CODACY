import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountFooterItem } from '../account-footer-item';
import { getAccountFooterItems, State } from '../state/account.reducer';
import * as AccountActions from '../state/account.actions';

@Component({
  selector: 'f2ml-account-footer-menu',
  templateUrl: './account-footer-menu.component.html',
  styleUrls: ['./account-footer-menu.component.scss']
})
export class AccountFooterMenuComponent implements OnInit {

  accountFooterItems$: Observable<AccountFooterItem[]> = this.store.select(getAccountFooterItems);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(AccountActions.loadAccountFooterItems());
  }

}
