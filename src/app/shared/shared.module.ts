import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { DefaultTemplateComponent } from './default-template/default-template.component';
import { FaqTileComponent } from './faq-tile/faq-tile.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DefaultCardComponent } from './default-card/default-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommunicationTileComponent } from './communication-tile/communication-tile.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { HomepageTemplateComponent } from './homepage-template/homepage-template.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { WysiwygDisplayerComponent } from './wysiwyg-displayer/wysiwyg-displayer.component';
import { LoaderComponent } from './loader/loader.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeVideoPlayerComponent } from './youtube-video-player/youtube-video-player.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatConfimDialogComponent } from './mat-confim-dialog/mat-confim-dialog.component';

@NgModule({
  declarations: [
    FooterComponent,
    DefaultTemplateComponent,
    FaqTileComponent,
    DefaultCardComponent,
    BreadcrumbComponent,
    CommunicationTileComponent,
    ViewMoreComponent,
    SearchInputComponent,
    HomepageTemplateComponent,
    BannerComponent,
    WysiwygDisplayerComponent,
    LoaderComponent,
    YoutubeVideoPlayerComponent,
    MatConfimDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
    YouTubePlayerModule,
    BreadcrumbModule,
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
    HomepageTemplateComponent,
    BannerComponent,
    WysiwygDisplayerComponent,
    LoaderComponent,
    YoutubeVideoPlayerComponent,
    MatConfimDialogComponent,
  ]
})
export class SharedModule { }
