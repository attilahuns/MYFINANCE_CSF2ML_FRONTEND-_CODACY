import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription, tap, timer } from 'rxjs';
import { Banner } from './banner';

@Component({
  selector: 'f2ml-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [ style({ transform: 'translateY(-100%)' }), animate('300ms ease-in', style({ transform: 'translateY(0%)' })) ]),
      // transition(':leave', [ animate('300ms ease-in', style({ transform: 'translateY(100%)' })) ])
    ])
  ],
})
export class BannerComponent implements OnInit {

  static readonly timeInterval = 10000;

  @Input() banners: Banner[] = []
  display = true;
  timer$: Observable<number> = timer(0, BannerComponent.timeInterval).pipe(
    map(n => 1 + (n % this.banners.length)),
  );

  constructor() { }

  ngOnInit(): void {}

  close(): void {
    this.display = false;
  }

}
