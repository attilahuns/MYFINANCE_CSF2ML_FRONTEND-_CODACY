import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import { ContractDetailComponent } from './contract-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ContractDetailComponent
  ],
  imports: [
    CommonModule,
    ContractDetailRoutingModule,
    SharedModule
  ]
})
export class ContractDetailModule { }
