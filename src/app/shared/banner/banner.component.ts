import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, tap, timer } from 'rxjs';
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
export class BannerComponent implements OnInit, OnDestroy {

  static readonly timeInterval = 10000;

  @Input() banners!: Banner[];
  tooltipContent = '';
  display = true;
  timer$!: Subscription;
  currentIndex = 0;

  constructor(private ref: ChangeDetectorRef, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.ref.detach();
    this._ngZone.runOutsideAngular(
      () => {
        this.timer$ = timer(0, BannerComponent.timeInterval).pipe(
          map(n => n % this.banners.length),
          tap(n => this.tooltipContent = this.banners[n].moreInformation),
          map(n => this.currentIndex = n + 1),
        ).subscribe(n => this.ref.detectChanges());
      }
    );
  }
  ngOnDestroy(): void {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }

  close(): void {
    this.display = false;
    this.ref.detectChanges();
    this.timer$.unsubscribe();
  }

}
