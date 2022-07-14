import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  {
    path: 'contact',
    data: {
      breadcrumb: 'Contact us'
    },
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ'
    },
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
