import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { TitleService } from 'src/app/core/services/title-service/title.service';
import { environment } from 'src/environments/environment';
import { FaqService } from './faq.service';
import * as FaqAction from "./state/faq.actions";
import { getFaqMetadata, State } from './state/faq.reducer';

@Component({
  selector: 'f2ml-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  private panelSubject: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  panel$ = this.panelSubject.asObservable();

  metadata$ = this.store.select(getFaqMetadata).pipe(
    filter(metadata => !!metadata.title),
    tap(metadata => this.titleService.setTitle(metadata.title)),
  );

  constructor(private store: Store<State>, private titleService: TitleService, private route: ActivatedRoute, private faqService: FaqService) { }

  ngOnInit(): void {
    this.store.dispatch(FaqAction.loadFaqMetadata());
    const faqId = +(this.route.snapshot.queryParamMap.get('id') as string);
    if (faqId) {
      this.togglePanel(faqId);
    }
  }

  togglePanel(id: number): void {
    if (id === this.panelSubject.getValue()) {
      this.panelSubject.next(-1);
      return;
    }
    this.panelSubject.next(id);
    this.faqService.consulte(id);
  }

  getFullUrl(url: string) {
    return environment.cms.endpoint + url;
  }
}
