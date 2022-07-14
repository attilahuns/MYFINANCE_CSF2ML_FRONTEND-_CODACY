import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqComponent } from './faq.component';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule
  ]
})
export class FaqModule { }
