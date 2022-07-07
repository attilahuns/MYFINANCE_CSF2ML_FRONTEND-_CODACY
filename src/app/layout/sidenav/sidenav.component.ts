import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { getFooterItems, getSidenavMenuItems, getSidenavToggle, State } from '../state/layout.reducer';
import * as LayoutAction from "../state/layout.actions";
import { Observable } from 'rxjs';
import { FooterItem } from 'src/app/shared/footer/footer-item';

@Component({
  selector: 'f2ml-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  footerItems$: Observable<FooterItem[]> = this.store.select(getFooterItems);
  sideMenuItems$ = this.store.select(getSidenavMenuItems);
  opened$ = this.store.select(getSidenavToggle);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(LayoutAction.loadSidenavMenuItems());
    this.store.dispatch(LayoutAction.loadFooterItems());
  }

  close(): void {
    this.store.dispatch(LayoutAction.closeSidenavMenu());
  }
}
