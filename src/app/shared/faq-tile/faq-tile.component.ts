import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { FaqMetadata } from './faq-tile';

@Component({
  selector: 'f2ml-faq-tile',
  templateUrl: './faq-tile.component.html',
  styleUrls: ['./faq-tile.component.scss']
})
export class FaqTileComponent implements OnInit {

  displayFaq = false;
  @Input() metadata!: FaqMetadata;

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {}

  openFaq() {
    this.displayFaq = true;
  }

  closeFaq(event: Event) {
    event.stopPropagation();
    this.displayFaq = false;
  }
}
