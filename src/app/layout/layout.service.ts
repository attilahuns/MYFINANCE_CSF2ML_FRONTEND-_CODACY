import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderMenuItem } from './header/header-menu-item';
import { SidenavMenuItem } from './sidenav/sidenav-menu-item';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  static readonly mainMenuEndpoint = `${environment.cms.endpoint}/api/menus/main`;
  static readonly headerMenuEndpoint = `${environment.cms.endpoint}/api/menus/header`;

  constructor(private http: HttpClient) { }

  getSidenavMenuItems(): Observable<SidenavMenuItem[]> {
    return this.http.get<SidenavMenuItem[]>(LayoutService.mainMenuEndpoint);
  }

  getHeaderItems(): Observable<HeaderMenuItem[]> {
    return this.http.get<HeaderMenuItem[]>(LayoutService.headerMenuEndpoint).pipe(
      map(header => header.reverse())
    );
  }

}
