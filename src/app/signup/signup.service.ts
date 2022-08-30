import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientType, SignupCompleteMetadata, SignupMetadata } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications/signup`;
  static readonly metadataCompleteEndpoint = `${environment.cms.endpoint}/api/signup-complete`;

  readonly metadata$ = this.http.get<SignupMetadata>(SignupService.metadataEndpoint).pipe(
    shareReplay(1),
  );
  readonly metadataCompletePersonal$ = this.http.get<SignupCompleteMetadata>(`${SignupService.metadataCompleteEndpoint}/${ClientType.Personal}`).pipe(
    shareReplay(1),
  );
  readonly metadataCompleteBusiness$ = this.http.get<SignupCompleteMetadata>(`${SignupService.metadataCompleteEndpoint}/${ClientType.Business}`).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

  getMetadataComplete(type: string): Observable<SignupCompleteMetadata> {
    if (ClientType.Personal === type) {
      return this.metadataCompletePersonal$;
    }
    return this.metadataCompleteBusiness$;
  }
}
