import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInMetadata } from './signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications/signin`;
  readonly metadata$ = this.http.get<SignInMetadata>(SigninService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
