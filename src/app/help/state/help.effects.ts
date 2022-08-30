import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HelpService } from '../help.service';
import * as HelpAction from './help.actions';

@Injectable({
  providedIn: 'root'
})
export class HelpEffect {

  loadhelp$ = createEffect(() => {
    return this.actions.pipe(
      ofType(HelpAction.loadHelp),
      mergeMap((action) => this.helpService.getMetadata(action.helpType).pipe(
        map(help => HelpAction.loadHelpSuccess({help})),
        catchError(error => {
          return of(HelpAction.loadHelpFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private helpService: HelpService) { }
}
