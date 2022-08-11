import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ContractDetailService } from '../contract-detail.service';
import { ContractDetail } from '../contractDetail';
import * as ContractDetailsAction from './contract-details.actions';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailtEffect {

  contractDetails: ContractDetail[] = [
    {document : 'PCP Contract' , reference : '100P6TG79', date : '13/05/2021' , download : '' , view : '' , unopened : true},
    {document : 'Invalidity insurance' , reference : 'KXLFCF4X.pdf', date : '12/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Welcome letter' , reference : 'Letter_1.pdf', date : '10/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'PCP Contract' , reference : '100P6TG79', date : '13/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Invalidity insurance' , reference : 'KXLFCF4X.pdf', date : '12/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Welcome letter' , reference : 'Letter_1.pdf', date : '10/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'PCP Contract' , reference : '100P6TG79', date : '13/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Invalidity insurance' , reference : 'KXLFCF4X.pdf', date : '12/05/2021' , download : '' , view : '' , unopened : false},
    {document : 'Welcome letter' , reference : 'Letter_1.pdf', date : '10/05/2021' , download : '' , view : '' , unopened : false}
  ]

  loadcontractsItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ContractDetailsAction.loadContractDetail),
      mergeMap(() => of(this.contractDetails).pipe(
        map(contractDetails => ContractDetailsAction.loadContractDetailSuccess({contractDetails})),
        catchError(error => {
          return of(ContractDetailsAction.loadContractDetailFailure({error}))
        })
      ))
    )
  });

  loadcontractsMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ContractDetailsAction.loadContractDetailMetadata),
      mergeMap(() => this.contractService.getMetadata().pipe(
        map(contractDetailMetadata => ContractDetailsAction.loadContractDetailMetadataSuccess({contractDetailMetadata})),
        catchError(error => {
          return of(ContractDetailsAction.loadContractDetailMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private contractService: ContractDetailService) { }
}
