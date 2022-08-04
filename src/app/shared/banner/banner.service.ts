import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  static readonly bannerEndpoint = `${environment.cms.endpoint}/api/banners`;

  constructor(private http: HttpClient) { }

  getBannerItems(): Observable<Banner[]> {
    return this.http.get<Banner[]>(BannerService.bannerEndpoint);
  }

}
