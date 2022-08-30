import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IS_LOADER_NOT_TRIGGERED } from '../core/interceptors/loader-interceptor.service';
import { AccountMetadata, AccountPage, OtpMetadata } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/general-infos`;
  static readonly metadataOtpEndpoint = `${environment.cms.endpoint}/api/otp`;
  private httpContext = {
    context: new HttpContext().set(IS_LOADER_NOT_TRIGGERED, true)
  }

  readonly signinMetadata$ = this.http.get<AccountMetadata>(`${AccountService.metadataEndpoint}/${AccountPage.SIGN_IN}`, this.httpContext).pipe(
    shareReplay(1),
  );
  readonly signupMetadata$ = this.http.get<AccountMetadata>(`${AccountService.metadataEndpoint}/${AccountPage.SIGN_UP}`, this.httpContext).pipe(
    shareReplay(1),
  );
  readonly otpMetadata$ = this.http.get<OtpMetadata>(AccountService.metadataOtpEndpoint).pipe(
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }

  getMetadata(page: string): Observable<AccountMetadata> {
    if (AccountPage.SIGN_IN === page) {
      return this.signinMetadata$;
    }
    return this.signupMetadata$;
  }

}
