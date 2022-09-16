import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementEnterpriseRoutingModule } from './access-management-enterprise-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccessManagementEnterpriseComponent } from './access-management-enterprise.component';
import { AccessManagementEnterpriseLaptopComponent } from './access-management-enterprise-laptop/access-management-enterprise-laptop.component';
import { AccessManagementEnterpriseMobileComponent } from './access-management-enterprise-mobile/access-management-enterprise-mobile.component';
import { accessManagementEnterpriseReducer } from './state/access-management-enterprise.reducer';
import { AccessManagementEnterpriseEffect } from './state/access-management-enterprise.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AccessManagementEnterpriseComponent,
    AccessManagementEnterpriseLaptopComponent,
    AccessManagementEnterpriseMobileComponent
  ],
  imports: [
    CommonModule,
    AccessManagementEnterpriseRoutingModule,
    SharedModule,
    StoreModule.forFeature('accessManagementEnterprise', accessManagementEnterpriseReducer),
    EffectsModule.forFeature([AccessManagementEnterpriseEffect])
  ]
})
export class AccessManagementEnterpriseModule { }
