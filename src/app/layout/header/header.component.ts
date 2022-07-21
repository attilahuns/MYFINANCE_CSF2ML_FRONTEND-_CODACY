import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { environment } from 'src/environments/environment';
import { toggleSidenavMenu } from '../state/layout.actions';
import { getHeaderItems, getSidenavToggle, State } from '../state/layout.reducer';
import { HeaderMenuItem } from './header-menu-item';

@Component({
  selector: 'f2ml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerItems$: Observable<HeaderMenuItem[]> = this.store.select(getHeaderItems);
  isMenuOpen$ = this.store.select(getSidenavToggle);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void { }

  toggleMenu(): void {
    this.store.dispatch(toggleSidenavMenu());
  }

  getIconUrl(icon?: string): string {
    return environment.cms.endpoint + icon;
  }
}
