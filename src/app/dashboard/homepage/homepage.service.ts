import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomepageMetada } from './homepage';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/homepage`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<HomepageMetada> {
    return this.http.get<HomepageMetada>(HomepageService.metadataEndpoint);
  }

}
