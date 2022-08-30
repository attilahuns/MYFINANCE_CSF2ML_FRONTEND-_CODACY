import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Homepage, RequestStatus } from '../homepage';
import { HomepageService } from '../homepage.service';
import * as HomepageAction from "./homepage.actions";

@Injectable({
  providedIn: 'root'
})
export class HomepageEffect {

  homepage: Homepage = {
    agreements: [
      {
        brand: 'Peugeot',
        model: '3008',
        image: '/assets/images/car__details.png',
        vin: 'WW-342-Z1',
        agreementNumber: '100SPUG68975',
        financialProduct: 'PCP'
      },
      {
        brand: 'Citroen',
        model: 'C5',
        image: '/assets/images/car__details.png',
        vin: 'AA-212-ZB',
        agreementNumber: 'CT-76	',
        financialProduct: 'PCP Plus'
      },
      {
        brand: 'Peugeot',
        model: '208',
        image: '/assets/images/car__details.png',
        vin: 'XX-596-Z4',
        agreementNumber: 'MH-89',
        financialProduct: 'PFL'
      },
    ],
    documents: [
      {
        agreementNumber: '100SPUG68975',
      },
      {
        agreementNumber: 'CT-76	',
      },
      {
        agreementNumber: 'MH-89',
      },
    ],
    requests: [
      {
        title: 'Request 1',
        description: 'Change my personnal details',
        status: RequestStatus.IN_PROGRESS,
      },
      {
        title: 'Request 2',
        description: 'Change my personnal details',
        status: RequestStatus.CANCELED,
      },
      {
        title: 'Request 3',
        description: 'Change my personnal details',
        status: RequestStatus.COMPLETED,
      },
    ]
  };

  loadHomepageData$ = createEffect(() => {
    return this.actions.pipe(
      ofType(HomepageAction.loadHomepageData),
      mergeMap(() => of(this.homepage).pipe(
        map(homepage => HomepageAction.loadHomepageDataSuccess({homepage})),
        catchError(error => {
          return of(HomepageAction.loadHomepageDataFailure({error}))
        })
      ))
    )
  });

  loadHomepageMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(HomepageAction.loadHomepageMetadata),
      mergeMap(() => this.homepageService.metadata$.pipe(
        map(homepageMetadata => HomepageAction.loadHomepageMetadataSuccess({homepageMetadata})),
        catchError(error => {
          return of(HomepageAction.loadHomepageMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private homepageService: HomepageService) { }
}
