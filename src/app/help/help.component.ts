import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import * as HelpAction from "./state/help.actions";
import { getHelpContent } from './state/help.reducer';

@Component({
  selector: 'f2ml-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  metadata$ = this.store.select(getHelpContent).pipe(
    filter(metadata => !!metadata.title),
  )

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    const helpType = this.route.snapshot.params['type'];
    if (!['signin','signup'].includes(helpType)) {
      this.router.navigate(['/page-not-found']);
    }
    this.store.dispatch(HelpAction.loadHelp({helpType}));
  }

}
