import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Request, RequestMetadata, RequestStatus } from '../homepage';

@Component({
  selector: 'f2ml-homepage-requests',
  templateUrl: './homepage-requests.component.html',
  styleUrls: ['./homepage-requests.component.scss']
})
export class HomepageRequestsComponent implements OnInit {

  @Input() requests!: Request[];
  @Input() metadata!: RequestMetadata;

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void { }

  getRequestStatusClass(status: RequestStatus) {
    return {
      'home__requests__dot__progress': status === RequestStatus.IN_PROGRESS,
      'home__requests__dot__cancelled': status === RequestStatus.CANCELED,
      'home__requests__dot__completed': status === RequestStatus.COMPLETED,
    }
  }

}
