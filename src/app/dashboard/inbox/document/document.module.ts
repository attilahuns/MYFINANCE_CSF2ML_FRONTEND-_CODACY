import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { documentReducer } from './state/document.reducer';
import { DocumentEffect } from './state/document.effects';
import { EffectsModule } from '@ngrx/effects';
import { DocumentLaptopComponent } from './document-laptop/document-laptop.component';
import { DocumentMobileComponent } from './document-mobile/document-mobile.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

@NgModule({
  declarations: [
    DocumentComponent,
    DocumentLaptopComponent,
    DocumentMobileComponent,
    DocumentDetailComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    SharedModule,
    StoreModule.forFeature('document', documentReducer),
    EffectsModule.forFeature([DocumentEffect])
  ]
})
export class DocumentModule { }
