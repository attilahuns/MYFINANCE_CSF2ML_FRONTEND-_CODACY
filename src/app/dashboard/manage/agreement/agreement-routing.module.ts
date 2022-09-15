import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement.component';

const routes: Routes = [
  { path: '', component: AgreementComponent },
  {
    path: 'contract-details',
    data: {
      breadcrumb: {
        skip: true
      }
    },
    loadChildren: () => import('../contract-detail/contract-detail.module').then(m => m.ContractDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementRoutingModule { }
