import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SigninService } from '../signin.service';
import * as SigninAction from './signin.actions';

@Injectable({
  providedIn: 'root'
})
export class SigninEffect {

  loadsigninMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(SigninAction.loadSigninMetadata),
      mergeMap(() => this.signinService.metadata$.pipe(
        map(metadata => SigninAction.loadSigninMetadataSuccess({metadata})),
        catchError(error => {
          return of(SigninAction.loadSigninMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private signinService: SigninService) { }
}
