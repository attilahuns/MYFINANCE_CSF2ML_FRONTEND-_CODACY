import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutResolver } from '../layout/layout.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: {
        skip: true
      }
    },
    resolve: {
      layout: LayoutResolver
    },
    children: [
      {
        path: 'inbox',
        data: {
          breadcrumb: {
            alias: 'inbox',
            disable: true,
          },
        },
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule),
      },
      {
        path: 'account',
        data: {
          breadcrumb: {
            alias: 'account',
            disable: true,
          },
        },
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
      },
      {
        path: 'manage',
        data: {
          breadcrumb: {
            alias: 'manage',
            disable: true,
          },
        },
        loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule),
      },
      {
        path: 'help',
        data: {
          breadcrumb: {
            alias: 'help',
            disable: true,
          },
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
