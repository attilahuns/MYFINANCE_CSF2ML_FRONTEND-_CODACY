import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractDetailComponent } from './contract-detail.component';

const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: {
        alias: 'contract-details',
      },
    },
    children: [
      {
        path: '',
        component: ContractDetailComponent,
      },
      {
        path: 'payment-history',
        data: {
          breadcrumb: {
            alias: 'payment-history',
          },
        },
        loadChildren: () => import('../payment-history/payment-history.module').then(m => m.PaymentHistoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDetailRoutingModule { }
