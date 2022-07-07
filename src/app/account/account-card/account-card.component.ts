import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'f2ml-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() withFooter = false;

  constructor() { }

  ngOnInit(): void { }

}
