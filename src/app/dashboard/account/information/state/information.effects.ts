import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { InformationService } from '../information.service';
import * as InformationActions from './information.actions';

@Injectable({
  providedIn: 'root'
})
export class InformationEffect {

  private informationData = {
    firstname: 'Enrico',
    lastname: 'Fermi',
    address: '10 Friars Way Burnham On Sea TA8 1RD Somerset',
    country: 'Italy',
    drivingLicence: 'ASKODO3663CACD',
    passport: 'DA6574',
    idCard: 'AC56784DS',
    phoneNumber: '+44 01 86 52 49 81',
    email: 'enrico.fermi@hotmail.com',
    isSecrect: false,
  }

  loadinformationItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(InformationActions.loadInformation),
      mergeMap(() => of(this.informationData).pipe(
        map(informations => InformationActions.loadInformationSuccess({informations})),
        catchError(error => {
          return of(InformationActions.loadInformationFailure({error}))
        })
      ))
    )
  });

  loadInformationMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(InformationActions.loadInformationMetadata),
      mergeMap(() => this.informationService.getMetadata().pipe(
        map(metadata => InformationActions.loadInformationMetadataSuccess({metadata})),
        catchError(error => {
          return of(InformationActions.loadInformationMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private informationService: InformationService) { }
}
