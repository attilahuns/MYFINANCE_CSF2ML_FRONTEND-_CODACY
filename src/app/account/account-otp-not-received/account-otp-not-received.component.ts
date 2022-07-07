import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'f2ml-account-otp-not-received',
  templateUrl: './account-otp-not-received.component.html',
  styleUrls: ['./account-otp-not-received.component.scss']
})
export class AccountOtpNotReceivedComponent implements OnInit {

  otpNotReceivedForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.otpNotReceivedForm = this.formBuilder.group({
      phone: ['', [ Validators.required, Validators.pattern('^[0-9]{10}$') ] ],
      nif: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{16}$') ] ],
    });
  }
  submit() {
    if (this.otpNotReceivedForm.valid) {
      this.submitted = true;
    }
  }

}
