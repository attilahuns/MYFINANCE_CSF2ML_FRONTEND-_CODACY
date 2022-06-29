import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailRoutingModule } from './bank-detail-routing.module';
import { BankDetailComponent } from './bank-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BankDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BankDetailRoutingModule
  ]
})
export class BankDetailModule { }
