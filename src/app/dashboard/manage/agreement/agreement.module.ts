import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementRoutingModule } from './agreement-routing.module';
import { AgreementComponent } from './agreement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AgreementEffect } from './state/agreement.effects';
import { EffectsModule } from '@ngrx/effects';
import { agreementReducer } from './state/agreement.reducer';
import { FormsModule } from '@angular/forms';
import { AgreementMobileComponent } from './agreement-mobile/agreement-mobile.component';
import { AgreementLaptopComponent } from './agreement-laptop/agreement-laptop.component';

@NgModule({
  declarations: [
    AgreementComponent,
    AgreementMobileComponent,
    AgreementLaptopComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AgreementRoutingModule,
    StoreModule.forFeature('agreement', agreementReducer),
    EffectsModule.forFeature([AgreementEffect])
  ]
})
export class AgreementModule { }
