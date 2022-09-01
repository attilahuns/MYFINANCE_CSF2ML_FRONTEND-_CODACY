import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FaqService } from '../faq.service';
import * as FaqAction from "./faq.actions";

@Injectable({
  providedIn: 'root'
})
export class FaqEffect {

  loadFaqData$ = createEffect(() => {
    return this.actions.pipe(
      ofType(FaqAction.loadFaqMetadata),
      mergeMap(() => this.faqService.metadata$.pipe(
        map(faqMetadata => FaqAction.loadFaqMetadataSuccess({faqMetadata})),
        catchError(error => {
          return of(FaqAction.loadFaqMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private faqService: FaqService) { }
}
