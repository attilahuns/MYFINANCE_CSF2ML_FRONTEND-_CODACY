import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import { AccountModule } from '../account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { signinReducer } from './state/signin.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SigninEffect } from './state/signin.effects';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SharedModule,
    AccountModule,
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('signin', signinReducer),
    EffectsModule.forFeature([SigninEffect])
  ]
})
export class SigninModule { }
