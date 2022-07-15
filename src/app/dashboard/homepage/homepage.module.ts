import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageAgreementsComponent } from './homepage-agreements/homepage-agreements.component';
import { HomepageDocumentsComponent } from './homepage-documents/homepage-documents.component';
import { HomepageRequestsComponent } from './homepage-requests/homepage-requests.component';
import { HomepageManageableContentComponent } from './homepage-manageable-content/homepage-manageable-content.component';


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
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
