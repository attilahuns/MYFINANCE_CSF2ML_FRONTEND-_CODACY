import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Information } from '../information';
import * as InformationActions from './information.actions';

@Injectable({
  providedIn: 'root'
})
export class InformationEffect {

  private informationData = {
    title: 'General information',
    data: [
      {
        label: 'Firstname',
        value: 'Enrico',
        isSecrect: false,
      },
      {
        label: 'Lastname',
        value: 'Fermi',
        isSecrect: false,
      },
      {
        label: 'Address',
        value: '10 Friars Way Burnham On Sea TA8 1RD Somerset',
        isSecrect: false,
      },
      {
        label: 'Country',
        value: 'Italy',
        isSecrect: false,
      },
      {
        label: 'Driving licence',
        value: 'ASKODO3663CACD',
        isSecrect: true,
      },
      {
        label: 'Passport',
        value: 'DA6574',
        isSecrect: true,
      },
      {
        label: 'ID Card',
        value: 'AC56784DS',
        isSecrect: true,
      },
    ]
  }
  private contactData = {
    title: 'Contact information',
    data: [
      {
        label: 'Phone number',
        value: '+44 01 86 52 49 81',
        isSecrect: false,
      },
      {
        label: 'Email',
        value: 'enrico.fermi@hotmail.com',
        isSecrect: false,
      },
    ]
  }
  private informations: Information[] = [this.informationData, this.contactData];


  loadinformationItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(InformationActions.loadInformation),
      mergeMap(() => of(this.informations).pipe(
        map(informations => InformationActions.loadInformationSuccess({informations})),
        catchError(error => {
          return of(InformationActions.loadInformationFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
