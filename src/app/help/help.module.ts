import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { helpReducer } from './state/help.reducer';
import { HelpEffect } from './state/help.effects';

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule,
    StoreModule.forFeature('help', helpReducer),
    EffectsModule.forFeature([HelpEffect])
  ]
})
export class HelpModule { }
