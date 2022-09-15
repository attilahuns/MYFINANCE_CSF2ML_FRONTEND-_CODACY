import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, tap } from 'rxjs';
import { FooterItem } from '../shared/footer/footer-item';
import { getAccountMetadata, getFooterItems, State } from './state/account.reducer';
import * as AccountActions from './state/account.actions';
import { Router } from '@angular/router';
import { DeviceDetectorService } from '../core/services/device-detector/device-detector.service';
import { AccountMetadata, AccountPage } from './account';
import { environment } from 'src/environments/environment';
import { TitleService } from '../core/services/title-service/title.service';

@Component({
  selector: 'f2ml-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  footerItems: FooterItem[] = [];
  metadata!: AccountMetadata;
  content$: Observable<boolean> = combineLatest([this.store.select(getAccountMetadata), this.store.select(getFooterItems)]).pipe(
    filter(([metadata, footerItems]) => !!metadata.title && !!footerItems.length),
    tap(([metadata, _]) => this.titleService.setTitle(metadata.title)),
    tap(([metadata, footerItems]) => {
      this.metadata = metadata;
      this.footerItems = footerItems;
    }),
    map(([metadata, footerItems]) => !!metadata.title && !!footerItems.length),
  );

  constructor(private store: Store<State>, private titleService: TitleService, private router: Router, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AccountActions.loadFooterItems());
    this.store.dispatch(AccountActions.loadAccountMetadata({page: this.isSigninPage() ? AccountPage.SIGN_IN : AccountPage.SIGN_UP}));
  }
  ngOnDestroy(): void {
    this.store.dispatch(AccountActions.resetAccountMetadata());
  }

  isSignupPage() {
    return this.router.url.startsWith('/signup');
  }
  isSigninPage() {
    return this.router.url.startsWith('/signin');
  }

  getIconUrl(icon: string) {
    return environment.cms.endpoint + icon;
  }

}
