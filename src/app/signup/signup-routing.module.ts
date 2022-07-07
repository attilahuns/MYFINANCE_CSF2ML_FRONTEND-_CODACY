import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOtpInvalidComponent } from '../account/account-otp-invalid/account-otp-invalid.component';
import { AccountOtpNotReceivedComponent } from '../account/account-otp-not-received/account-otp-not-received.component';
import { AccountOtpComponent } from '../account/account-otp/account-otp.component';
import { AccountComponent } from '../account/account.component';
import { SignupCompleteBusinessComponent } from './signup-complete-business/signup-complete-business.component';
import { SignupCompleteIndividualComponent } from './signup-complete-individual/signup-complete-individual.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: SignupComponent },
      { path: 'otp', component: AccountOtpComponent },
      { path: 'otp-not-received', component: AccountOtpNotReceivedComponent },
      { path: 'otp-invalid', component: AccountOtpInvalidComponent },
      {
        path: 'complete',
        children: [
          { path: '', redirectTo: '/signup', pathMatch:'full'},
          { path: 'individual', component: SignupCompleteIndividualComponent },
          { path: 'business', component: SignupCompleteBusinessComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
