import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterItem } from './footer-item';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getFooterItems(): Observable<FooterItem[]> {
    return of([
      { label: 'Welcome page', href: '/welcome' },
      { label: 'Legals', href: '/legal' },
      { label: 'Cookies reglementations', href: '' },
      { label: 'Personal data', href: '' },
    ]);
  }
}
