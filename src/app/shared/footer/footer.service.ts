import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { IS_LOADER_NOT_TRIGGERED } from 'src/app/core/interceptors/loader-interceptor.service';
import { environment } from 'src/environments/environment';
import { FooterItem } from './footer-item';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  static readonly endpoint = `${environment.cms.endpoint}/api/menus/footer`;
  private httpContext = {
    context: new HttpContext().set(IS_LOADER_NOT_TRIGGERED, true)
  }

  constructor(private http: HttpClient) { }

  getFooterItems(): Observable<FooterItem[]> {
    return this.http.get<FooterItem[]>(FooterService.endpoint, this.httpContext);
  }

}
