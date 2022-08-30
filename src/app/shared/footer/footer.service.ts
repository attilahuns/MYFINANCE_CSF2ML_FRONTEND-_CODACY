import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
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
  readonly footerItems$ = this.http.get<FooterItem[]>(FooterService.endpoint, this.httpContext).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
