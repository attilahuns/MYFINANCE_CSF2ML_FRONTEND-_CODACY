import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getInformations } from './state/information.reducer';
import * as InformationActions from './state/information.actions';
import { InformationData } from './information';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  title = 'Personal information'

  informations$ = this.store.select(getInformations);

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(InformationActions.loadInformation());
  }
}
