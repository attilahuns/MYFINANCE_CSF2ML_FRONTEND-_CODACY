import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from '../account/account.module';
import { SignupCompletePersonalComponent } from './signup-complete-personal/signup-complete-personal.component';
import { SignupCompleteBusinessComponent } from './signup-complete-business/signup-complete-business.component';
import { signupReducer } from './state/signup.reducer';
import { SignupEffect } from './state/signup.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    SignupComponent,
    SignupCompletePersonalComponent,
    SignupCompleteBusinessComponent,
  ],
  imports: [
    SharedModule,
    AccountModule,
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('signup', signupReducer),
    EffectsModule.forFeature([SignupEffect])
  ]
})
export class SignupModule { }
