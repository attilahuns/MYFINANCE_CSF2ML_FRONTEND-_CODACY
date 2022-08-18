import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getSignupCompleteBusinessMetadata } from '../state/signup.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as SignupAction from "../state/signup.actions";

@Component({
  selector: 'f2ml-signup-complete-business',
  templateUrl: './signup-complete-business.component.html',
  styleUrls: ['./signup-complete-business.component.scss']
})
export class SignupCompleteBusinessComponent implements OnInit {

  signupCompleteForm!: FormGroup;
  submitted = false;
  metadata$ = this.store.select(getSignupCompleteBusinessMetadata).pipe(
    filter(metadata => !!metadata.descriptionMessage)
  )

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.signupCompleteForm = this.formBuilder.group({
      piva: ['', [ Validators.required, Validators.pattern('^[0-9]{11}$') ] ],
      vin: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{17}$') ] ],
      address: ['', [ Validators.required ] ],
    });
    this.store.dispatch(SignupAction.loadSignupCompleteMetadata({client: 'business'}));
  }

  submit() {
    if (this.signupCompleteForm.valid) {
      this.submitted = true;
    }
  }
}
