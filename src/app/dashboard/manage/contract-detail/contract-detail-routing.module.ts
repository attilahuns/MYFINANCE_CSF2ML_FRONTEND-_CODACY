import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailComponent } from './contract-detail.component';

const routes: Routes = [
  { path: '' , component: ContractDetailComponent },
  {
    path: 'payments',
    data: {
      breadcrumb: 'Payment History'
    },
    loadChildren: () => import('../payment-history/payment-history.module').then(m => m.PaymentHistoryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDetailRoutingModule { }
