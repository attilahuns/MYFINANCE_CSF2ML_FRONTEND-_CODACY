import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from '../account/account.module';
import { SignupCompleteIndividualComponent } from './signup-complete-individual/signup-complete-individual.component';
import { SignupCompleteBusinessComponent } from './signup-complete-business/signup-complete-business.component';

@NgModule({
  declarations: [
    SignupComponent,
    SignupCompleteIndividualComponent,
    SignupCompleteBusinessComponent,
  ],
  imports: [
    SharedModule,
    AccountModule,
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SignupModule { }
