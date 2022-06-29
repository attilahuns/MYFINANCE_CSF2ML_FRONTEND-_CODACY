import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationTileComponent } from './information-tile/information-tile.component';
import { StoreModule } from '@ngrx/store';
import { informationReducer } from './state/information.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InformationEffect } from './state/information.effects';


@NgModule({
  declarations: [
    InformationComponent,
    InformationTileComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    InformationRoutingModule,
    StoreModule.forFeature('information', informationReducer),
    EffectsModule.forFeature([InformationEffect])
  ]
})
export class InformationModule { }
