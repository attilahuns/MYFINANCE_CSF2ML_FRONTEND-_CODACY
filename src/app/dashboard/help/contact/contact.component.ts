import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap, map, filter } from 'rxjs';
import { ContactMetadata } from './contact';
import * as ContactAction from "./state/contact.actions";
import { getContactMetadata } from './state/contact.reducer';

@Component({
  selector: 'f2ml-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact$ = this.store.select(getContactMetadata).pipe(
    filter(metadata => '' !== metadata.title),
  )

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ContactAction.loadContactMetadataItems())
  }

}
