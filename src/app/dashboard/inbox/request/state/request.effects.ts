import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Request, RequestForm, RequestStatus } from '../request';
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

  forms: RequestForm[] = [
    {
      id: 1,
      title: 'Modify your personal details',
    },
    {
      id: 2,
      title: 'Modify your bank details',
    },
    {
      id: 3,
      title: 'Report an accident',
    },
    {
      id: 4,
      title: 'Rent transfer toward a company',
    },
    {
      id: 5,
      title: 'Rent transfer toward a client',
    },
    {
      id: 6,
      title: 'Questions - Make contact',
    },

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
  loadrequestForms$ = createEffect(() => {
    return this.actions.pipe(
      ofType(RequestAction.loadRequestForms),
      mergeMap(() => of(this.forms).pipe(
        map(requestForms => RequestAction.loadRequestFormsSuccess({requestForms})),
        catchError(error => {
          return of(RequestAction.loadRequestFormsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
