import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'f2ml-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ],
    });
  }

  submit() {
    // the query param was added statically for demo purpose, it will be dynamic later
    if (this.signinForm.valid) {
      this.router.navigate(['/signin/otp'], { queryParams: { 'account' : 'business' }});
    }
  }

}
