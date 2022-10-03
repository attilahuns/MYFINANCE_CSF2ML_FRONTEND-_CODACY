import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentResolver } from './document/document.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'requests', pathMatch: 'full' },
  {
    path: 'requests',
    data: {
      breadcrumb: {
        alias: 'requests',
      },
    },
   loadChildren: () => import('./request/request.module').then(m => m.RequestModule)
  },
  {
    path: 'documents',
    data: {
      breadcrumb: {
        alias: 'documents',
      },
    },
    resolve: {
      transcodingTable: DocumentResolver,
    },
    loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
