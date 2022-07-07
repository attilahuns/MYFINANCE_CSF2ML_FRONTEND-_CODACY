import { Component, Input, OnInit } from '@angular/core';

import { FooterItem } from './footer-item';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerItems: FooterItem[] = [];

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void { }

}
