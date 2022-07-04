import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'finance', pathMatch: 'full' },
  { path: 'agreements', loadChildren: () => import('./agreement/agreement.module').then(m => m.AgreementModule) },
  { path: 'contract-details',loadChildren: () => import('./contract-detail/contract-detail.module').then(m => m.ContractDetailModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
