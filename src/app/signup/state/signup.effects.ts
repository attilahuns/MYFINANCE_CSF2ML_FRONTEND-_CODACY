import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SignupService } from '../signup.service';
import * as SignupAction from './signup.actions';

@Injectable({
  providedIn: 'root'
})
export class SignupEffect {

  loadsignupMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(SignupAction.loadSignupMetadata),
      mergeMap(() => this.signupService.getMetadata().pipe(
        map(metadata => SignupAction.loadSignupMetadataSuccess({metadata})),
        catchError(error => {
          return of(SignupAction.loadSignupMetadataFailure({error}))
        })
      ))
    )
  });

  loadSignupCompleteMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(SignupAction.loadSignupCompleteMetadata),
      mergeMap((action) => this.signupService.getMetadataComplete(action.client).pipe(
        map(metadata => SignupAction.loadSignupCompleteMetadataSuccess({metadata})),
        catchError(error => {
          return of(SignupAction.loadSignupCompleteMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private signupService: SignupService) { }
}
