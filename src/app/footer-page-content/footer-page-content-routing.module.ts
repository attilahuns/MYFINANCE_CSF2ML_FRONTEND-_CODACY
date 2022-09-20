import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterPageContentComponent } from './footer-page-content.component';

const routes: Routes = [{ path: '', component: FooterPageContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterPageContentRoutingModule { }
