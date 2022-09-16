import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessManagementEnterpriseComponent } from './access-management-enterprise.component';

const routes: Routes = [
  { path: '', component: AccessManagementEnterpriseComponent },
  {
    path: ':id',
    data: {
      breadcrumb: {
        alias: 'access-management-enterprise'
      }
    },
    loadChildren: () => import('../access-management/access-management.module').then(m => m.AccessManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessManagementEnterpriseRoutingModule { }
