import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterItem } from '../shared/footer/footer-item';
import { getFooterItems, getServiceItems, State } from './state/account.reducer';
import * as AccountActions from './state/account.actions';
import { Router } from '@angular/router';
import { AccountServiceItem } from './account-service-item';
import { DeviceDetectorService } from '../core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  footerItems$: Observable<FooterItem[]> = this.store.select(getFooterItems);
  services$: Observable<AccountServiceItem[]> = this.store.select(getServiceItems);

  constructor(private store: Store<State>, private router: Router, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AccountActions.loadFooterItems());
    this.store.dispatch(AccountActions.loadAccountServiceItems());
  }

  isSignupPage() {
    return this.router.url.startsWith('/signup');
  }
  isLoginPage() {
    return this.router.url.startsWith('/login');
  }
}
