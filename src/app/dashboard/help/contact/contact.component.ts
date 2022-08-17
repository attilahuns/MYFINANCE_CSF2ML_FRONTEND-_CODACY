import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as ContactAction from "./state/contact.actions";
import { getContactMetadata } from './state/contact.reducer';

@Component({
  selector: 'f2ml-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  metadata$ = this.store.select(getContactMetadata).pipe(
    filter(metadata => !!metadata.title),
  )

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ContactAction.loadContactMetadataItems())
  }

}
