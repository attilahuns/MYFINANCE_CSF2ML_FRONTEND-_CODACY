import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentComponent } from './document.component';

const routes: Routes = [
  { path:'', component: DocumentComponent },
  {
    path: 'details/:id',
    component: DocumentDetailComponent,
    data: {
      breadcrumb: {
        alias: 'document-details'
      }
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
