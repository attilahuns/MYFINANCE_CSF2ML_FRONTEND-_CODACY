import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import { ContractDetailComponent } from './contract-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContractDetailTableComponent } from './contract-detail-table/contract-detail-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContractDetailtEffect } from './state/contract-details.effects';
import { ContractDetailsReducer } from './state/contract-details.reducer';

@NgModule({
  declarations: [
    ContractDetailComponent,
    ContractDetailTableComponent
  ],
  imports: [
    CommonModule,
    ContractDetailRoutingModule,
    SharedModule,
    StoreModule.forFeature('contractDetails', ContractDetailsReducer),
    EffectsModule.forFeature([ContractDetailtEffect])
  ]
})
export class ContractDetailModule { }
