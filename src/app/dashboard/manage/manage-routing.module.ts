import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'agreements', pathMatch: 'full' },
  {
    path: 'agreements',
    data: {
      breadcrumb: {
        alias: 'agreements'
      },
    },
    loadChildren: () => import('./agreement/agreement.module').then(m => m.AgreementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
