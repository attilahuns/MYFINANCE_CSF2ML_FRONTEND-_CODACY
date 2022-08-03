import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailRoutingModule } from './bank-detail-routing.module';
import { BankDetailComponent } from './bank-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankDetailTileComponent } from './bank-detail-tile/bank-detail-tile.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bankDetailReducer } from './state/bank-detail.reducer';
import { BankDetailEffect } from './state/bank-detail.effects';


@NgModule({
  declarations: [
    BankDetailComponent,
    BankDetailTileComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BankDetailRoutingModule,
    StoreModule.forFeature('bankDetail', bankDetailReducer),
    EffectsModule.forFeature([BankDetailEffect])
  ]
})
export class BankDetailModule { }
