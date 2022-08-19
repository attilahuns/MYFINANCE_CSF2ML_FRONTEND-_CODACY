import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'f2ml-homepage-template',
  templateUrl: './homepage-template.component.html',
  styleUrls: ['./homepage-template.component.scss']
})
export class HomepageTemplateComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
