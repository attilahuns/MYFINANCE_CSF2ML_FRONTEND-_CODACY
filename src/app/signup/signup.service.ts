import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupCompleteMetadata, SignupMetadata } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications/signup`;
  static readonly metadataCompleteEndpoint = `${environment.cms.endpoint}/api/signup-complete`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<SignupMetadata> {
    return this.http.get<SignupMetadata>(SignupService.metadataEndpoint);
  }

  getMetadataComplete(type: string): Observable<SignupCompleteMetadata> {
    return this.http.get<SignupCompleteMetadata>(`${SignupService.metadataCompleteEndpoint}/${type}`);
  }
}
