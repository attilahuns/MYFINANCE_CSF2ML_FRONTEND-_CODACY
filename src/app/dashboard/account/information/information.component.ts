import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, tap } from 'rxjs';
import { getInformations, getInformationsMetadata } from './state/information.reducer';
import * as InformationActions from './state/information.actions';
import { Information, InformationMetadata } from './information';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  informations: Information[] = [];
  metadata!: InformationMetadata;
  content$ = combineLatest([this.store.select(getInformations), this.store.select(getInformationsMetadata)]).pipe(
    filter(([informations, metadata]) => '' !== metadata.title),
    tap(([informations, metadata]) => {
      this.metadata = metadata;
      this.informations = [
        {
          title: metadata.generalInformation.title,
          data: [
            {
              label: metadata.generalInformation.firstnameLabel,
              value: informations.firstname,
              isSecrect: false,
            },
            {
              label: metadata.generalInformation.lastnameLabel,
              value: informations.lastname,
              isSecrect: false,
            },
            {
              label: metadata.generalInformation.addressLabel,
              value: informations.address,
              isSecrect: false,
            },
            {
              label: metadata.generalInformation.countryLabel,
              value: informations.country,
              isSecrect: false,
            },
            {
              label: metadata.generalInformation.drivingLicenceLabel,
              value: informations.drivingLicence,
              isSecrect: true,
            },
            {
              label: metadata.generalInformation.passportLabel,
              value: informations.passport,
              isSecrect: true,
            },
            {
              label: metadata.generalInformation.idCardLabel,
              value: informations.idCard,
              isSecrect: true,
            },
          ]
        },
        {
          title: metadata.contactInformation.title,
          data: [
            {
              label: metadata.contactInformation.phoneNumberLabel,
              value: informations.phoneNumber,
              isSecrect: false,
            },
            {
              label: metadata.contactInformation.emailLabel,
              value: informations.email,
              isSecrect: false,
            },
          ]
        },
      ];
    }),
    map(([informations, metadata]) => '' !== metadata.title),
  );

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(InformationActions.loadInformation());
    this.store.dispatch(InformationActions.loadInformationMetadata());
  }

}
