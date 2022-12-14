import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaqComponent } from './faq.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FaqEffect } from './state/faq.effects';
import { faqReducer } from './state/faq.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqVoteComponent } from './faq-vote/faq-vote.component';


@NgModule({
  declarations: [
    FaqComponent,
    FaqVoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaqRoutingModule,
    SharedModule,
    StoreModule.forFeature('faq', faqReducer),
    EffectsModule.forFeature([FaqEffect])
  ]
})
export class FaqModule { }
