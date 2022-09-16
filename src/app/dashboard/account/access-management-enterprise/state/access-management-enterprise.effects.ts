import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AccessManagementEnterprise } from '../access-management-entreprise';
import * as AccessManagementEnterpriseAction from './access-management-enterprise.actions';

@Injectable({
  providedIn: 'root'
})
export class AccessManagementEnterpriseEffect {

  accessManagementEnterpriseItems: AccessManagementEnterprise[] = [
    { piva : '11111111111' , companyName: 'Company name 1' },
    { piva : '22222222222' , companyName: 'Company name 2' },
    { piva : '33333333333' , companyName: 'Company name 3' },
    { piva : '44444444444' , companyName: 'Company name 4' },
    { piva : '55555555555' , companyName: 'Company name 5' },
    { piva : '66666666666' , companyName: 'Company name 6' },
    { piva : '77777777777' , companyName: 'Company name 7' },
    { piva : '88888888888' , companyName: 'Company name 8' },
  ];

  loadAccessManagementEnterpriseItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItems),
      mergeMap(() => of(this.accessManagementEnterpriseItems).pipe(
        map(accessManagementEnterpriseItems => AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItemsSuccess({accessManagementEnterpriseItems})),
        catchError(error => {
          return of(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItemsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
