import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'f2ml-account-loader',
  templateUrl: './account-loader.component.html',
  styleUrls: ['./account-loader.component.scss']
})
export class AccountLoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
