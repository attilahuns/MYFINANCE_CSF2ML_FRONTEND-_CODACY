import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutResolver } from '../layout/layout.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      layout: LayoutResolver
    },
    children: [
      {
        path: 'inbox',
        data: {
          breadcrumb: 'Inbox'
        },
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'account',
        data: {
          breadcrumb: 'Account'
        },
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'manage',
        data: {
          breadcrumb: 'Manage'
        },
        loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule),
      },
      {
        path: 'help',
        data: {
          breadcrumb: 'Help'
        },
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
