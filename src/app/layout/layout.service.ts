import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SidenavMenuItem } from './sidenav/sidenav-menu-item';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  static readonly mainMenuEndpoint = `${environment.cms.endpoint}/api/menus/main`;

  constructor(private http: HttpClient) { }

  getSidenavMenuItems(): Observable<SidenavMenuItem[]> {
    return this.http.get<SidenavMenuItem[]>(LayoutService.mainMenuEndpoint);
  }

}
