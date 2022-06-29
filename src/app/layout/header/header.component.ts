import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { toggleSidenavMenu } from '../state/layout.actions';
import { getSidenavToggle, State } from '../state/layout.reducer';

@Component({
  selector: 'f2ml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen$ = this.store.select(getSidenavToggle);

  constructor(private store: Store<State>, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void { }
  toggleMenu(): void {
    this.store.dispatch(toggleSidenavMenu());
  }

}
