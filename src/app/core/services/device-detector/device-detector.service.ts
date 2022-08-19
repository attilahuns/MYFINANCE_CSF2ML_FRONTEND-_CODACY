import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

export enum Breakpoints {
  Mobile = '(max-width: 576px)',
  Tablet = '(min-width: 577px) and (max-width: 1023px)',
  Laptop = '(min-width: 1024px)',
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
