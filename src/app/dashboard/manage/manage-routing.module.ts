import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'finance', pathMatch: 'full' },
  {
    path: 'agreements',
    data: {
      breadcrumb: 'Agreements'
    },
    loadChildren: () => import('./agreement/agreement.module').then(m => m.AgreementModule)
  },
  {
    path: 'agreements/contract-details/:id',
    data: {
      breadcrumb: '{{id}}'
    },
    loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
