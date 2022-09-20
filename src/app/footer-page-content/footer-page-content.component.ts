import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as FooterContentAction from "./state/footer-page-content.actions";
import { getFooterPageContent } from './state/footer-page-content.reducer';

@Component({
  selector: 'f2ml-footer-page-content',
  templateUrl: './footer-page-content.component.html',
  styleUrls: ['./footer-page-content.component.scss']
})
export class FooterPageContentComponent implements OnInit {

  metadata$ = this.store.select(getFooterPageContent).pipe(
    filter(metadata => metadata.title !== ''),
    tap(metadata => {
      if (!metadata.title) {
        this.router.navigate(['/page-not-found']);
      }
    })
  )

  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    const footer = this.route.snapshot.params['footer'];
    this.store.dispatch(FooterContentAction.loadFooter({footer}));
  }

  getFullUrl(url: string) {
    return environment.cms.endpoint + url;
  }

  navigate(url: string): void {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
      return;
    }
    this.router.navigateByUrl(url);
  }

}
