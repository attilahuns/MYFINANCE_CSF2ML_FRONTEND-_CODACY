import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Agreement, AgreementMetadata } from '../homepage';

@Component({
  selector: 'f2ml-homepage-agreements',
  templateUrl: './homepage-agreements.component.html',
  styleUrls: ['./homepage-agreements.component.scss']
})
export class HomepageAgreementsComponent implements OnInit {

  private sliderSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  slider$ = this.sliderSubject.asObservable();
  @Input() metadata!: AgreementMetadata;
  @Input() agreements!: Agreement[];

  constructor() { }

  ngOnInit(): void { }

  nextSlide(): void {
    const nextSlideIndex = this.sliderSubject.getValue() + 1;
    if (nextSlideIndex <= this.agreements.length) {
      this.sliderSubject.next(nextSlideIndex);
    }
  }
  previousSlide(): void {
    const previousSlideIndex = this.sliderSubject.getValue() - 1;
    if (previousSlideIndex > 0) {
      this.sliderSubject.next(previousSlideIndex);
    }
  }
  showSlide(index: number, currentSlide: number) {
    return ++index === currentSlide;
  }
  toSlide(index: number) {
    this.sliderSubject.next(++index);
  }

}
