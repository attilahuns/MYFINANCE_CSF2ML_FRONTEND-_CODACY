import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'f2ml-account-otp-not-received-business',
  templateUrl: './account-otp-not-received-business.component.html',
  styleUrls: ['./account-otp-not-received-business.component.scss']
})
export class AccountOtpNotReceivedBusinessComponent implements OnInit {

  otpNotReceivedForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.otpNotReceivedForm = this.formBuilder.group({
      phone: ['', [ Validators.required, Validators.pattern('^[0-9]{10}$') ] ],
      piva: ['', [ Validators.required, Validators.pattern('^[0-9]{11}$') ] ],
    });
  }
  submit() {
    if (this.otpNotReceivedForm.valid) {
      this.submitted = true;
    }
  }

}
