import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Agreement } from '../agreement';
import * as AgreementAction from './agreement.actions';

@Injectable({
  providedIn: 'root'
})
export class AgreementEffect {

  agreements: Agreement[] = [
    {contactHolder: 'XXXXXXX', vehicule: '3008 Peugeot', registrationNumber: 'WW-342-ZE', financeProduct: 'PCP', agreementNumber: '100PO610206', agreementStartDate: '12/05/2021', mot: '15/03/2022'},
    {contactHolder: 'XXXXXXX', vehicule: 'Helium', registrationNumber: 'AA-212-ZB', financeProduct: 'PFL', agreementNumber: 'MH-89', agreementStartDate: '12/05/2016', mot: '15/03/2023'},
    {contactHolder: 'XXXXXXX', vehicule: 'C5 Citroen', registrationNumber:'AA-212-ZB', financeProduct: 'PCP Plus', agreementNumber: 'CT-76', agreementStartDate: '21/01/2016', mot: '15/03/2021'},
    {contactHolder: 'XXXXXXX', vehicule: '3008 Peugeot', registrationNumber: 'WW-342-ZE', financeProduct: 'PCP', agreementNumber: '100PO610206', agreementStartDate: '12/05/2021', mot: '15/03/2022'},
    {contactHolder: 'XXXXXXX', vehicule: 'Helium', registrationNumber: 'AA-212-ZB', financeProduct: 'PFL', agreementNumber: 'MH-89', agreementStartDate: '12/05/2016', mot: '15/03/2023'},
    {contactHolder: 'XXXXXXX', vehicule: 'C5 Citroen', registrationNumber:'AA-212-ZB', financeProduct: 'PCP Plus', agreementNumber: 'CT-76', agreementStartDate: '21/01/2016', mot: '15/03/2021'},
    {contactHolder: 'XXXXXXX', vehicule: '3008 Peugeot', registrationNumber: 'WW-342-ZE', financeProduct: 'PCP', agreementNumber: '100PO610206', agreementStartDate: '12/05/2021', mot: '15/03/2022'},
    {contactHolder: 'XXXXXXX', vehicule: 'Helium', registrationNumber: 'AA-212-ZB', financeProduct: 'PFL', agreementNumber: 'MH-89', agreementStartDate: '12/05/2016', mot: '15/03/2023'},
    {contactHolder: 'XXXXXXX', vehicule: 'C5 Citroen', registrationNumber:'AA-212-ZB', financeProduct: 'PCP Plus', agreementNumber: 'CT-76', agreementStartDate: '21/01/2016', mot: '15/03/2021'},
    {contactHolder: 'XXXXXXX', vehicule: '3008 Peugeot', registrationNumber: 'WW-342-ZE', financeProduct: 'PCP', agreementNumber: '100PO610206', agreementStartDate: '12/05/2021', mot: '15/03/2022'},
    {contactHolder: 'XXXXXXX', vehicule: 'Helium', registrationNumber: 'AA-212-ZB', financeProduct: 'PFL', agreementNumber: 'MH-89', agreementStartDate: '12/05/2016', mot: '15/03/2023'},
    {contactHolder: 'XXXXXXX', vehicule: 'C5 Citroen', registrationNumber:'AA-212-ZB', financeProduct: 'PCP Plus', agreementNumber: 'CT-76', agreementStartDate: '21/01/2016', mot: '15/03/2021'},
  ];

  loadfooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(AgreementAction.loadAgreement),
      mergeMap(() => of(this.agreements).pipe(
        map(agreements => AgreementAction.loadAgreementSuccess({agreements})),
        catchError(error => {
          return of(AgreementAction.loadAgreementFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions) { }
}
