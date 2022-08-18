import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IS_LOADER_NOT_TRIGGERED } from 'src/app/core/interceptors/loader-interceptor.service';
import { environment } from 'src/environments/environment';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  static readonly bannerEndpoint = `${environment.cms.endpoint}/api/banners`;
  private httpContext = {
    context: new HttpContext().set(IS_LOADER_NOT_TRIGGERED, true)
  }

  constructor(private http: HttpClient) { }

  getBannerItems(): Observable<Banner[]> {
    return this.http.get<Banner[]>(BannerService.bannerEndpoint, this.httpContext);
  }

}
