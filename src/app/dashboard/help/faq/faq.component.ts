import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f2ml-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  panelIndex: number = -1;
  questions = ['Setting your agreement','How do l change my address?','How do I change my bank details?','How long should I wait for a reply to query?']
  constructor() { }

  ngOnInit(): void {
  }

  openPanel(index: number) {
    this.panelIndex = index;
  }

  closePanel(index: number) {
    if (index == this.panelIndex) {
      this.panelIndex = -1
    }
  }

}
