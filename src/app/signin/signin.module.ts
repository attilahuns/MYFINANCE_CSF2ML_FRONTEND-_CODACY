import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import { AccountModule } from '../account/account.module';
import { ReactiveFormsModule } from '@angular/forms';


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
  ]
})
export class SigninModule { }
