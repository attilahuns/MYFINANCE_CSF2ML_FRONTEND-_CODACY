import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';


@Component({
  selector: 'f2ml-document-mobile',
  templateUrl: './document-mobile.component.html',
  styleUrls: ['./document-mobile.component.scss']
})
export class DocumentMobileComponent implements OnInit {


  @Input() data: any;
  @Input() indice: any;
  isTablette!: boolean;
  innerWidth: number = window.innerWidth;
  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
  }



}
