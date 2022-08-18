import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getOtpGeneralMetadata } from '../state/account.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as AccountAction from "../state/account.actions";

@Component({
  selector: 'f2ml-account-otp',
  templateUrl: './account-otp.component.html',
  styleUrls: ['./account-otp.component.scss']
})
export class AccountOtpComponent implements OnInit {

  otpForm!: FormGroup;
  accountType!: string;
  metadata$ = this.store.select(getOtpGeneralMetadata).pipe(
    filter(metadata => !!metadata.ctaValidateLabel)
  )

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', [ Validators.required, Validators.pattern('^[0-9]{6}$')] ],
    });
    this.accountType = this.route.snapshot.queryParamMap.get('account') as string;
    if (!['business','personal'].includes(this.accountType)) {
      this.router.navigate(['/page-not-found']);
    }

    this.store.dispatch(AccountAction.loadOtpMetadata());
  }

  submit(): void {
    if (!this.otpForm.valid) {
      return
    }
    // check if the OTP is truly valid
    // this is for demo only
    if ('000000' === this.otpForm.value.otp) {
      this.router.navigate(['../otp-invalid'], {relativeTo: this.route});
      return;
    }
    // authenticate & redirect to dashboard
    this.router.navigate(['/dashboard']);
  }

}
