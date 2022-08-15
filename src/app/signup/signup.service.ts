import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupMetadata } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications/signup`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<SignupMetadata> {
    return this.http.get<SignupMetadata>(SignupService.metadataEndpoint);
  }
}
