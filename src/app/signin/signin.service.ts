import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInMetadata } from './signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications/signin`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<SignInMetadata> {
    return this.http.get<SignInMetadata>(SigninService.metadataEndpoint);
  }
}
