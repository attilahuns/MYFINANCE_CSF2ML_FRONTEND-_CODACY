import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getFooterItems, State } from '../../layout/state/layout.reducer';
import { FooterItem } from './footer-item';
import * as LayoutActions from '../../layout/state/layout.actions';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerItems$: Observable<FooterItem[] | null> = this.store.select(getFooterItems);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(LayoutActions.loadFooterItems());
  }

}
