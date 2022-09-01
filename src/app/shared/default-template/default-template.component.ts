import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { CommunicationMetadata } from '../communication-tile/communication';
import { FaqMetadata } from '../faq-tile/faq-tile';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'f2ml-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent implements OnInit {

  @Input() hiddenSideFaq:boolean = false;
  @Input() communicationMetadata!: CommunicationMetadata | undefined;
  @Input() faqMetadata!: FaqMetadata | undefined;

  constructor(public deviceDetector: DeviceDetectorService, public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
