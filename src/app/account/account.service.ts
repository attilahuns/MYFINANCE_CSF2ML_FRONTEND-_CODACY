import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IS_LOADER_NOT_TRIGGERED } from '../core/interceptors/loader-interceptor.service';
import { AccountMetadata, OtpMetadata } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/general-infos`;
  static readonly metadataOtpEndpoint = `${environment.cms.endpoint}/api/otp`;
  private otpMetadataCache$!: Observable<OtpMetadata>;
  private httpContext = {
    context: new HttpContext().set(IS_LOADER_NOT_TRIGGERED, true)
  }

  constructor(private http: HttpClient) { }

  getMetadata(page: string): Observable<AccountMetadata> {
    return this.http.get<AccountMetadata>(`${AccountService.metadataEndpoint}/${page}`, this.httpContext);
  }

  getOtpMetadata(): Observable<OtpMetadata> {
    if (!this.otpMetadataCache$) {
      this.otpMetadataCache$ = this.http.get<OtpMetadata>(AccountService.metadataOtpEndpoint).pipe(
        shareReplay(1)
      );
    }

    return this.otpMetadataCache$;
  }

}
