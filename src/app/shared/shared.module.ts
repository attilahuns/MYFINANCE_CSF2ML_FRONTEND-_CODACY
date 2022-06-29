import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { DefaultTemplateComponent } from './default-template/default-template.component';
import { FaqTileComponent } from './faq-tile/faq-tile.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DefaultCardComponent } from './default-card/default-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    DefaultTemplateComponent,
    FaqTileComponent,
    DefaultCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
  ],
  exports: [
    FooterComponent,
    DefaultTemplateComponent,
    FaqTileComponent,
    DefaultCardComponent,
    CommonModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
  ]
})
export class SharedModule { }
