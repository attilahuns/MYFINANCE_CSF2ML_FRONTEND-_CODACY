import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOtpInvalidComponent } from '../account/account-otp-invalid/account-otp-invalid.component';
import { AccountOtpNotReceivedBusinessComponent } from '../account/account-otp-not-received-business/account-otp-not-received-business.component';
import { AccountOtpNotReceivedPersonalComponent } from '../account/account-otp-not-received-personal/account-otp-not-received-personal.component';
import { AccountOtpComponent } from '../account/account-otp/account-otp.component';
import { AccountComponent } from '../account/account.component';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: SigninComponent },
      { path: 'otp', component: AccountOtpComponent },
      { path: 'otp-not-received-personal', component: AccountOtpNotReceivedPersonalComponent },
      { path: 'otp-not-received-business', component: AccountOtpNotReceivedBusinessComponent },
      { path: 'otp-invalid', component: AccountOtpInvalidComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
