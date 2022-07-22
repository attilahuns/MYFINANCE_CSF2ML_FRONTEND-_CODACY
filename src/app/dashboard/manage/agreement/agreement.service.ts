import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgreementMetadata } from './agreement';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/agreements`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<AgreementMetadata> {
    return this.http.get<AgreementMetadata>(AgreementService.metadataEndpoint);
  }

}
