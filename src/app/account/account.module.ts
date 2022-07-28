import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './state/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffect } from './state/account.effects';
import { AccountCardComponent } from './account-card/account-card.component';
import { AccountFooterMenuComponent } from './account-footer-menu/account-footer-menu.component';
import { AccountOtpComponent } from './account-otp/account-otp.component';
import { AccountOtpNotReceivedPersonalComponent } from './account-otp-not-received-personal/account-otp-not-received-personal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountOtpInvalidComponent } from './account-otp-invalid/account-otp-invalid.component';
import { AccountOtpNotReceivedBusinessComponent } from './account-otp-not-received-business/account-otp-not-received-business.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountCardComponent,
    AccountFooterMenuComponent,
    AccountOtpComponent,
    AccountOtpNotReceivedPersonalComponent,
    AccountOtpInvalidComponent,
    AccountOtpNotReceivedBusinessComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forFeature('account', accountReducer),
    EffectsModule.forFeature([AccountEffect]),
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  exports: [
    AccountComponent,
    AccountCardComponent,
    AccountFooterMenuComponent,
    AccountOtpComponent,
    AccountOtpNotReceivedPersonalComponent,
    AccountOtpInvalidComponent,
    AccountOtpNotReceivedBusinessComponent,
  ]
})
export class AccountModule { }
