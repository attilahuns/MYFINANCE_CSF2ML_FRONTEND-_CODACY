import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageAgreementsComponent } from './homepage-agreements/homepage-agreements.component';
import { HomepageDocumentsComponent } from './homepage-documents/homepage-documents.component';
import { HomepageRequestsComponent } from './homepage-requests/homepage-requests.component';
import { HomepageManageableContentComponent } from './homepage-manageable-content/homepage-manageable-content.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homepageReducer } from './state/homepage.reducer';
import { HomepageEffect } from './state/homepage.effects';


@NgModule({
  declarations: [
    HomepageComponent,
    HomepageAgreementsComponent,
    HomepageDocumentsComponent,
    HomepageRequestsComponent,
    HomepageManageableContentComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomepageRoutingModule,
    StoreModule.forFeature('homepage', homepageReducer),
    EffectsModule.forFeature([HomepageEffect])
  ]
})
export class HomepageModule { }
