import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Payment } from '../payment';
import { PaymentHistoryService } from '../payment-history.service';
import * as PaymentAction from './payment.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentEffect {

  payments: Payment[] = [
    {dueAmount: '£225', status: 'unpaid', dueDate: '20/05/2022',  View: ''},
    {dueAmount: '£225', status: 'paid', dueDate: '20/05/2021',   View: ''},
    {dueAmount: '£225', status: 'paid', dueDate: '10/05/2021',   View: ''},
    {dueAmount: '£225', status: 'unpaid', dueDate: '20/05/2022', View: ''},
    {dueAmount: '£225', status: 'paid', dueDate: '20/05/2021',   View: ''},
    {dueAmount: '£225', status: 'paid', dueDate: '10/05/2021', View: ''},
  ];

  loadfooterItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(PaymentAction.loadPayment),
      mergeMap(() => of(this.payments).pipe(
        map(payments => PaymentAction.loadPaymentSuccess({payments})),
        catchError(error => {
          return of(PaymentAction.loadPaymentFailure({error}))
        })
      ))
    )
  });

  loadpaymentMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(PaymentAction.loadPaymentMetadata),
      mergeMap(() => this.paymentService.metadata$.pipe(
        map(metadata => PaymentAction.loadPaymentMetadataSuccess({metadata})),
        catchError(error => {
          return of(PaymentAction.loadPaymentMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private paymentService: PaymentHistoryService) { }
}
