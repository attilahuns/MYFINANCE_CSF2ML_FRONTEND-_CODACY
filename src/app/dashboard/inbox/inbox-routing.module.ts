import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'requests', pathMatch: 'full' },
  {
    path: 'requests',
    data: {
      breadcrumb: 'Requests'
    },
   loadChildren: () => import('./request/request.module').then(m => m.RequestModule)
  },
  {
    path: 'documents',
    data: {
      breadcrumb: 'Documents'
    },
    loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
