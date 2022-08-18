import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getOtpPersonalMetadata } from '../state/account.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as AccountAction from "../state/account.actions";

@Component({
  selector: 'f2ml-account-otp-not-received',
  templateUrl: './account-otp-not-received-personal.component.html',
  styleUrls: ['./account-otp-not-received-personal.component.scss']
})
export class AccountOtpNotReceivedPersonalComponent implements OnInit {

  otpNotReceivedForm!: FormGroup;
  submitted = false;

  metadata$ = this.store.select(getOtpPersonalMetadata).pipe(
    filter(metadata => !!metadata.ctaSendLabel)
  )

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.otpNotReceivedForm = this.formBuilder.group({
      phone: ['', [ Validators.required, Validators.pattern('^[0-9]{10}$') ] ],
      nif: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{16}$') ] ],
    });

    this.store.dispatch(AccountAction.loadOtpMetadata());
  }
  submit() {
    if (this.otpNotReceivedForm.valid) {
      this.submitted = true;
    }
  }

}
