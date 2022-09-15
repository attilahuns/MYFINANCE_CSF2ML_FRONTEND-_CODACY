import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { TitleService } from 'src/app/core/services/title-service/title.service';
import * as ContactAction from "./state/contact.actions";
import { getContactMetadata, State } from './state/contact.reducer';

@Component({
  selector: 'f2ml-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  metadata$ = this.store.select(getContactMetadata).pipe(
    filter(metadata => !!metadata.title),
    tap(metadata => this.titleService.setTitle(metadata.title)),
  )

  constructor(private store: Store<State>, private titleService: TitleService) { }

  ngOnInit(): void {
    this.store.dispatch(ContactAction.loadContactMetadataItems())
  }

}
