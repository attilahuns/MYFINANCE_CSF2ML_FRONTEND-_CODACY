import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

export enum Breakpoints {
  Mobile = '(max-width: 428px)',
  Tablet = '(min-width: 429px) and (max-width: 991px)',
  Laptop = '(min-width: 992px)',
}

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {
  private breakpointobserver$ = this.breakpointObserver.observe(Object.values(Breakpoints)).subscribe();

  constructor(private breakpointObserver: BreakpointObserver) { }

  isMobile(): boolean {
    return this.is(Breakpoints.Mobile);
  }
  isTablet(): boolean {
    return this.is(Breakpoints.Tablet);
  }
  isLaptop(): boolean {
    return this.is(Breakpoints.Laptop);
  }

  private is(device: string): boolean {
    return this.breakpointObserver.isMatched(device);
  }
}
