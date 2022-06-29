import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
