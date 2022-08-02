import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { getBannerItems, getFooterItems, getSidenavMenuItems, getSidenavToggle, State } from '../state/layout.reducer';
import * as LayoutAction from "../state/layout.actions";
import { Observable } from 'rxjs';
import { FooterItem } from 'src/app/shared/footer/footer-item';
import { environment } from 'src/environments/environment';
import { SidenavMenuItem } from './sidenav-menu-item';
import { Banner } from 'src/app/shared/banner/banner';

@Component({
  selector: 'f2ml-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  footerItems$: Observable<FooterItem[]> = this.store.select(getFooterItems);
  sideMenuItems$: Observable<SidenavMenuItem[]> = this.store.select(getSidenavMenuItems);
  opened$: Observable<boolean> = this.store.select(getSidenavToggle);
  banners$: Observable<Banner[]> = this.store.select(getBannerItems);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void { }

  close(): void {
    this.store.dispatch(LayoutAction.closeSidenavMenu());
  }

  getIconUrl(icon?: string): string {
    return environment.cms.endpoint + icon;
  }
}
