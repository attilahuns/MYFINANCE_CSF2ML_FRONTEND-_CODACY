import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FooterPageContentService } from '../footer-page-content.service';
import * as FooterContentAction from './footer-page-content.actions';

@Injectable({
  providedIn: 'root'
})
export class FooterPageContentEffect {

  loadfooter$ = createEffect(() => {
    return this.actions.pipe(
      ofType(FooterContentAction.loadFooter),
      mergeMap((action) => this.footerPageContentService.getMetadata(action.footer).pipe(
        map(footerPageContent => FooterContentAction.loadFooterSuccess({footerPageContent})),
        catchError(error => {
          return of(FooterContentAction.loadFooterFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private footerPageContentService: FooterPageContentService) { }
}
