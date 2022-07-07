import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'f2ml-signup-complete-individual',
  templateUrl: './signup-complete-individual.component.html',
  styleUrls: ['./signup-complete-individual.component.scss']
})
export class SignupCompleteIndividualComponent implements OnInit {

  signupCompleteForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupCompleteForm = this.formBuilder.group({
      nif: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{16}$') ] ],
      birthDate: ['', [ Validators.required ] ],
    });
  }

  submit() {
    if (this.signupCompleteForm.valid) {
      this.submitted = true;
    }
  }
}
