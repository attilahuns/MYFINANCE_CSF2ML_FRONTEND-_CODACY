import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'f2ml-signup-complete-business',
  templateUrl: './signup-complete-business.component.html',
  styleUrls: ['./signup-complete-business.component.scss']
})
export class SignupCompleteBusinessComponent implements OnInit {

  signupCompleteForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupCompleteForm = this.formBuilder.group({
      piva: ['', [ Validators.required, Validators.pattern('^[0-9]{11}$') ] ],
      vin: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9]{17}$') ] ],
      address: ['', [ Validators.required ] ],
    });
    // this.signupCompleteForm.valueChanges
  }

  submit() {
    if (this.signupCompleteForm.valid) {
      this.submitted = true;
    }
  }
}
