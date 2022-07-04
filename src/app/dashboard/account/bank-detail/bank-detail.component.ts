import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss']
})
export class BankDetailComponent implements OnInit {

  title = "Bank details";
  constructor( public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
  }

}
