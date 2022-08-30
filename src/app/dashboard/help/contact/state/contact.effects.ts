import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ContactService } from '../contact.service';
import * as ContactAction from './contact.actions';

@Injectable({
  providedIn: 'root'
})
export class ContactEffect {

  loadAccessManagementMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ContactAction.loadContactMetadataItems),
      mergeMap(() => this.contactService.metadata$.pipe(
        map(contactMetadata => ContactAction.loadContactMetadataItemsSuccess({contactMetadata})),
        catchError(error => {
          return of(ContactAction.loadContactMetadataItemsFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private contactService: ContactService) { }
}
