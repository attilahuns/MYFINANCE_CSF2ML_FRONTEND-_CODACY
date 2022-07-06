import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentHistoryRoutingModule } from './payment-history-routing.module';
import { PaymentHistoryComponent } from './payment-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { paymentReducer } from './state/payment.reducer';
import { PaymentEffect } from './state/payment.effects';
import { PaymentHistoryLaptopComponent } from './payment-history-laptop/payment-history-laptop.component';
import { PaymentHistoryMobileComponent } from './payment-history-mobile/payment-history-mobile.component';

@NgModule({
  declarations: [
    PaymentHistoryComponent,
    PaymentHistoryLaptopComponent,
    PaymentHistoryMobileComponent
  ],
  imports: [
    CommonModule,
    PaymentHistoryRoutingModule,
    SharedModule,
    StoreModule.forFeature('payment', paymentReducer),
    EffectsModule.forFeature([PaymentEffect])
  ]

})
export class PaymentHistoryModule { }
