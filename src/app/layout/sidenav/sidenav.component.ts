import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { getSidenavMenuItems, getSidenavToggle, State } from '../state/layout.reducer';
import * as LayoutAction from "../state/layout.actions";

@Component({
  selector: 'f2ml-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  sideMenuItems$ = this.store.select(getSidenavMenuItems);
  opened$ = this.store.select(getSidenavToggle);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(LayoutAction.loadSidenavMenuItems());
  }

  close(): void {
    this.store.dispatch(LayoutAction.closeSidenavMenu());
  }
}
