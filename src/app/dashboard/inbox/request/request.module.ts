import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { requestReducer } from './state/request.reducer';
import { RequestEffect } from './state/request.effects';
import { RequestLaptopComponent } from './request-laptop/request-laptop.component';
import { RequestMobileComponent } from './request-mobile/request-mobile.component';


@NgModule({
  declarations: [
    RequestComponent,
    RequestLaptopComponent,
    RequestMobileComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    SharedModule,
    StoreModule.forFeature('request', requestReducer),
    EffectsModule.forFeature([RequestEffect])
  ]
})
export class RequestModule { }
