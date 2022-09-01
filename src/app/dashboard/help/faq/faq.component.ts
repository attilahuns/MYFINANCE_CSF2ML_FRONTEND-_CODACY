import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as FaqAction from "./state/faq.actions";
import { getFaqMetadata } from './state/faq.reducer';

@Component({
  selector: 'f2ml-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelIndex: number = -1;
  metadata$ = this.store.select(getFaqMetadata).pipe(
    filter(metadata => !!metadata.title)
  )

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(FaqAction.loadFaqMetadata());
  }

  openPanel(index: number) {
    this.panelIndex = index;
  }

  closePanel(index: number) {
    if (index == this.panelIndex) {
      this.panelIndex = -1
    }
  }

  getFullUrl(url: string) {
    return environment.cms.endpoint + url;
  }
}
