import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { getSignupMetadata } from './state/signup.reducer';
import * as SignupAction from "./state/signup.actions";

@Component({
  selector: 'f2ml-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;
  withFooter = true;
  metadata$ = this.store.select(getSignupMetadata).pipe(
    filter(metadata => !!metadata.emailLabel),
  )

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ],
    });
    // this variable is added to check the type of signing up account, it will be used later
    let accountType = this.route.snapshot.queryParamMap.get('account') as string;
    if (!['business','personal'].includes(accountType)) {
      this.router.navigate(['/page-not-found']);
    }
    this.store.dispatch(SignupAction.loadSignupMetadata());
  }

  submit() {
    if (this.signupForm.valid) {
      this.submitted = true;
      this.withFooter = false;
    }
  }
}
