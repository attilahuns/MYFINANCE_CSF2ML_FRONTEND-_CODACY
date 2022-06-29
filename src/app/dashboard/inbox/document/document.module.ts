import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { DocumentMobileComponent } from './document-mobile/document-mobile.component';
import { SearchpipeModule } from 'src/app/shared/pipes/searchpipe/searchpipe.module';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentDetailComponent } from './document-detail/document-detail.component';


@NgModule({
  declarations: [
    DocumentComponent,
    DocumentMobileComponent,
    DocumentDetailComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    DocumentRoutingModule,
    SearchpipeModule,
    FormsModule,
  ]
})
export class DocumentModule { }
