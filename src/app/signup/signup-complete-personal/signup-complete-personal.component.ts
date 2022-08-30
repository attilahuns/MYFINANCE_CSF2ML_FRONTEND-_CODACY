import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getSignupCompletePersonalMetadata } from '../state/signup.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as SignupAction from "../state/signup.actions";
import { ClientType } from '../signup';

@Component({
  selector: 'f2ml-signup-complete-individual',
  templateUrl: './signup-complete-personal.component.html',
  styleUrls: ['./signup-complete-personal.component.scss']
})
export class SignupCompletePersonalComponent implements OnInit {

  signupCompleteForm!: FormGroup;
  submitted = false;
  metadata$ = this.store.select(getSignupCompletePersonalMetadata).pipe(
    filter(metadata => !!metadata.descriptionMessage)
  )

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.signupCompleteForm = this.formBuilder.group({
      nif: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{16}$') ] ],
      birthDate: ['', [ Validators.required ] ],
    });
    this.store.dispatch(SignupAction.loadSignupCompleteMetadata({client: ClientType.Personal}));
  }

  submit() {
    if (this.signupCompleteForm.valid) {
      this.submitted = true;
    }
  }
}
