import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { DefaultTemplateComponent } from './default-template/default-template.component';
import { FaqTileComponent } from './faq-tile/faq-tile.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DefaultCardComponent } from './default-card/default-card.component';
import { CommunicationTileComponent } from './communication-tile/communication-tile.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    DefaultTemplateComponent,
    FaqTileComponent,
    DefaultCardComponent,
    CommunicationTileComponent,
    ViewMoreComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
  ],
  exports: [
    FooterComponent,
    DefaultTemplateComponent,
    FaqTileComponent,
    DefaultCardComponent,
    ViewMoreComponent,
    SearchInputComponent,
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
    CommunicationTileComponent,
  ]
})
export class SharedModule { }
