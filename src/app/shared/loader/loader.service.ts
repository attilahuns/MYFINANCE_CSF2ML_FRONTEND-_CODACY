import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // the counter is used to decide when to hide the loader when there is multiple HTTP calls
  private static counter = 0;
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() { }

  showLoader(): void {
    LoaderService.counter++;
    if (this.isLoadingSubject.getValue()) {
      return;
    }
    this.isLoadingSubject.next(true);
  }

  hideLoader(): void {
    if (--LoaderService.counter === 0) {
      this.isLoadingSubject.next(false);
    }
  }
}
