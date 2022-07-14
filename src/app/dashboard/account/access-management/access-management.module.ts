import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { AccessManagementComponent } from './access-management.component';
import { AccessManagementLaptopComponent } from './access-management-laptop/access-management-laptop.component';
import { AccessManagementMobileComponent } from './access-management-mobile/access-management-mobile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { accessManagementReducer } from './state/access-management.reducer';
import { AccessManagementEffect } from './state/access-management.effects';
import { AccessManagementBaseComponent } from './access-management-base.component';
import { AccessManagementEditableComponent } from './access-management-editable.component';


@NgModule({
  declarations: [
    AccessManagementComponent,
    AccessManagementLaptopComponent,
    AccessManagementMobileComponent,
    AccessManagementBaseComponent,
    AccessManagementEditableComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AccessManagementRoutingModule,
    StoreModule.forFeature('accessManagement', accessManagementReducer),
    EffectsModule.forFeature([AccessManagementEffect])
  ]
})
export class AccessManagementModule { }
