import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
      { path: 'inbox', loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule) },
      { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
      { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
      { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
