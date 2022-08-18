import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getOtpInvalidMetadata } from '../state/account.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as AccountAction from "../state/account.actions";

@Component({
  selector: 'f2ml-account-otp-invalid',
  templateUrl: './account-otp-invalid.component.html',
  styleUrls: ['./account-otp-invalid.component.scss']
})
export class AccountOtpInvalidComponent implements OnInit {

  accountType!: string;
  metadata$ = this.store.select(getOtpInvalidMetadata).pipe(
    filter(metadata => !!metadata.notValidFeedbackMessage)
  )

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountType = this.route.snapshot.queryParamMap.get('account') as string;
    this.store.dispatch(AccountAction.loadOtpMetadata());
  }

}
