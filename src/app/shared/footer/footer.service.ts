import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FooterItem } from './footer-item';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private endpoint = `${environment.cms.endpoint}/api/menus/footer`;

  constructor(private http: HttpClient) { }

  getFooterItems(): Observable<FooterItem[]> {
    return this.http.get<FooterItem[]>(this.endpoint);
  }

}
