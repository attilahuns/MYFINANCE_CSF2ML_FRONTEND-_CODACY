import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterPageContentRoutingModule } from './footer-page-content-routing.module';
import { FooterPageContentComponent } from './footer-page-content.component';
import { SharedModule } from '../shared/shared.module';
import { footerPageContentReducer } from './state/footer-page-content.reducer';
import { FooterPageContentEffect } from './state/footer-page-content.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    FooterPageContentComponent
  ],
  imports: [
    CommonModule,
    FooterPageContentRoutingModule,
    SharedModule,
    StoreModule.forFeature('footerPageContent', footerPageContentReducer),
    EffectsModule.forFeature([FooterPageContentEffect])
  ]
})
export class FooterPageContentModule { }
