import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Request, RequestStatus } from '../request';
import * as RequestAction from './request.actions';

@Injectable({
  providedIn: 'root'
})
export class RequestEffect {

  requests: Request[] = [
    { request: 'Request 1', details: 'Declare a damage', status: RequestStatus.IN_PROGRESS, date: '09/06/2022' },
    { request: 'Request 2', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2021' },
    { request: 'Request 3', details: 'Declare a damage', status: RequestStatus.COMPLETED, date: '09/06/2015' },
    { request: 'Request 4', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2016' },
    { request: 'Request 1', details: 'Declare a damage', status: RequestStatus.IN_PROGRESS, date: '09/06/2022' },
    { request: 'Request 2', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2021' },
    { request: 'Request 3', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2015' },
    { request: 'Request 4', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2016' },
    { request: 'Request 1', details: 'Declare a damage', status: RequestStatus.IN_PROGRESS, date: '09/06/2022' },
    { request: 'Request 2', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2021' },
    { request: 'Request 3', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2015' },
    { request: 'Request 4', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2016' },
    { request: 'Request 1', details: 'Declare a damage', status: RequestStatus.IN_PROGRESS, date: '09/06/2022' },
    { request: 'Request 2', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2021' },
    { request: 'Request 3', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2015' },
    { request: 'Request 4', details: 'Declare a damage', status: RequestStatus.CANCELED, date: '09/06/2016' },

  ];

  loadrequestItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(RequestAction.loadRequest),
      mergeMap(() => of(this.requests).pipe(
        map(requests => RequestAction.loadRequestSuccess({requests})),
        catchError(error => {
          return of(RequestAction.loadRequestFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
