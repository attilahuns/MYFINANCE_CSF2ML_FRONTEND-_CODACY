import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestMetadata } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/requests`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<RequestMetadata> {
    return this.http.get<RequestMetadata>(RequestService.metadataEndpoint);
  }

}
