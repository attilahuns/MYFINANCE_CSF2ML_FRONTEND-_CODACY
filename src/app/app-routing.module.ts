import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'help/:type', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
  { path: 'infos/:footer', loadChildren: () => import('./footer-page-content/footer-page-content.module').then(m => m.FooterPageContentModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
