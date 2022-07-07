import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'f2ml-account-otp',
  templateUrl: './account-otp.component.html',
  styleUrls: ['./account-otp.component.scss']
})
export class AccountOtpComponent implements OnInit {

  otpForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', [ Validators.required, Validators.pattern('^[0-9]{6}$')] ],
    });
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
