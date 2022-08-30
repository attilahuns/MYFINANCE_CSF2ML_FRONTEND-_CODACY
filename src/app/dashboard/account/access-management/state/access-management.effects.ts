import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AccessManagement } from '../access-management';
import { AccessManagementService } from '../access-management.service';
import * as AccessManagementAction from './access-management.actions';

@Injectable({
  providedIn: 'root'
})
export class AccessManagementEffect {

  accessManagementItems: AccessManagement[] = [
    {id : 1 ,name: 'Lorem', firstName: 'Ispsum', role: 'Role 1', phone: '0123456789' , email : 'mail1@gmail.com'},
    {id : 2 ,name: 'Lorem', firstName: 'Ispsum', role: 'Role 1', phone: '0123456789' , email : 'email@mail.com'},
    {id : 3 ,name: 'Lorem', firstName: '-Ispsum', role: 'Role 1', phone: '0123456789' , email : 'email@mail.com'},
  ];

  loadAccessManagementItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccessManagementAction.loadAccessManagementItems),
      mergeMap(() => of(this.accessManagementItems).pipe(
        map(accessManagementItems => AccessManagementAction.loadAccessManagementItemsSuccess({accessManagementItems})),
        catchError(error => {
          return of(AccessManagementAction.loadAccessManagementItemsFailure({error}))
        })
      ))
    )
  });

  loadAccessManagementMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AccessManagementAction.loadAccessManagementMetadata),
      mergeMap(() => this.accessManagementService.metadata$.pipe(
        map(accessManagementMetadata => AccessManagementAction.loadAccessManagementMetadataSuccess({accessManagementMetadata})),
        catchError(error => {
          return of(AccessManagementAction.loadAccessManagementMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private accessManagementService: AccessManagementService) { }
}
