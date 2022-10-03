import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, map, Observable } from 'rxjs';
import { TranscodingTable } from './document';
import * as DocumentAction from "./state/document.actions";
import { getTranscodingTable } from './state/document.reducer';

@Injectable({
  providedIn: 'root'
})
export class DocumentResolver implements Resolve<TranscodingTable[]> {

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TranscodingTable[]> {
    this.store.dispatch(DocumentAction.loadTranscodingTable());

    return this.store.select(getTranscodingTable).pipe(
      filter(transcodingTable => !!transcodingTable.length),
      first(),
    );
  }
}
