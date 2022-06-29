import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';

@Component({
  selector: 'f2ml-faq-tile',
  templateUrl: './faq-tile.component.html',
  styleUrls: ['./faq-tile.component.scss']
})
export class FaqTileComponent implements OnInit {

  displayFaq = false;
  title= 'Need assistance';
  @Input() faqs = [
    {
      label: 'How can I update my request ?'
    },
    {
      label: 'How can I update my request ?'
    },
    {
      label: 'How can I update my request ?'
    }
  ];
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
