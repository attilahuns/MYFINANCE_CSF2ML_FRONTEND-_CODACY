import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Homepage, HomepageMetada, RequestStatus } from './homepage';
import { getHomepageData, getHomepageMetadata, State } from './state/homepage.reducer';
import * as HomepageAction from "./state/homepage.actions";
import { combineLatest, filter, map, Observable, tap } from 'rxjs';
import { TitleService } from 'src/app/core/services/title-service/title.service';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepage!: Homepage;
  metadata!: HomepageMetada;
  content$: Observable<boolean> = combineLatest([this.store.select(getHomepageData), this.store.select(getHomepageMetadata)]).pipe(
    filter(([homepage, metadata]) => !!metadata.title),
    tap(([_, metadata]) => this.titleService.setTitle(metadata.title)),
    tap(([homepage, metadata]) => {
      this.homepage = homepage;
      this.metadata = metadata;
    }),
    map(([homepage, metadata]) => !!metadata.title)
  )

  constructor(private store: Store<State>, private titleService: TitleService) { }

  ngOnInit(): void {
    this.store.dispatch(HomepageAction.loadHomepageData());
    this.store.dispatch(HomepageAction.loadHomepageMetadata());
  }

}
