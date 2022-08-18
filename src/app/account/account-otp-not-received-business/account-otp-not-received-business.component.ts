import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getOtpBusinessMetadata } from '../state/account.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as AccountAction from "../state/account.actions";

@Component({
  selector: 'f2ml-account-otp-not-received-business',
  templateUrl: './account-otp-not-received-business.component.html',
  styleUrls: ['./account-otp-not-received-business.component.scss']
})
export class AccountOtpNotReceivedBusinessComponent implements OnInit {

  otpNotReceivedForm!: FormGroup;
  submitted = false;

  metadata$ = this.store.select(getOtpBusinessMetadata).pipe(
    filter(metadata => !!metadata.ctaSendLabel)
  )

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.otpNotReceivedForm = this.formBuilder.group({
      phone: ['', [ Validators.required, Validators.pattern('^[0-9]{10}$') ] ],
      piva: ['', [ Validators.required, Validators.pattern('^[0-9]{11}$') ] ],
    });

    this.store.dispatch(AccountAction.loadOtpMetadata());
  }
  submit() {
    if (this.otpNotReceivedForm.valid) {
      this.submitted = true;
    }
  }

}
