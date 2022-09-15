import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'faq', pathMatch: 'full' },
  {
    path: 'contact',
    data: {
      breadcrumb: {
        alias: 'contact',
      },
    },
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'faq',
    data: {
      breadcrumb: {
        alias: 'faq',
      },
    },
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
