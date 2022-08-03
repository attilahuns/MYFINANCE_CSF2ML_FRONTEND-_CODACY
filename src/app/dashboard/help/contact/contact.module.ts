import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contactReducer } from './state/contact.reducer';
import { ContactEffect } from './state/contact.effects';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule,
    StoreModule.forFeature('contact', contactReducer),
    EffectsModule.forFeature([ContactEffect])
  ]
})
export class ContactModule { }
