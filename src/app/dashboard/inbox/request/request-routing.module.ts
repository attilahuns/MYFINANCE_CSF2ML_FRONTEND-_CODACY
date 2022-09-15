import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestComponent } from './request.component';


const routes: Routes = [
  { path: '', component: RequestComponent },
  {
    path: 'new',
    data: {
      breadcrumb: {
        alias: 'new-request',
      },
    },
    component: NewRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
