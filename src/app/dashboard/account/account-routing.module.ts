import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' },
  {
    path: 'information',
    data: {
      breadcrumb: 'Informations'
    },
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: 'bank-details',
    data: {
      breadcrumb: 'Bank details'
    },
    loadChildren: () => import('./bank-detail/bank-detail.module').then(m => m.BankDetailModule),
  },
  {
    path: 'access-management',
    data: {
      breadcrumb: 'Access Management'
    },
    loadChildren: () => import('./access-management/access-management.module').then(m => m.AccessManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
