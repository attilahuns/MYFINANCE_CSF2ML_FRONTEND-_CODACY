import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { layoutReducer } from './state/layout.reducer';
import { LayoutEffect } from './state/layout.effects';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([]),
    StoreModule.forFeature('layout', layoutReducer),
    EffectsModule.forFeature([LayoutEffect])
  ]
})
export class LayoutModule { }
