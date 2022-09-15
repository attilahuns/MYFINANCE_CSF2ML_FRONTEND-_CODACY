import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { TitleService } from '../core/services/title-service/title.service';
import * as HelpAction from "./state/help.actions";
import { getHelpContent, State } from './state/help.reducer';

@Component({
  selector: 'f2ml-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  metadata$ = this.store.select(getHelpContent).pipe(
    filter(metadata => !!metadata.title),
    tap(metadata => this.titleService.setTitle(metadata.title)),
  )

  constructor(private route: ActivatedRoute, private store: Store<State>, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    const helpType = this.route.snapshot.params['type'];
    if (!['signin','signup'].includes(helpType)) {
      this.router.navigate(['/page-not-found']);
    }
    this.store.dispatch(HelpAction.loadHelp({helpType}));
  }

}
