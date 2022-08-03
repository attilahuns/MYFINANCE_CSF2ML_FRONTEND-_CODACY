import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankDetailMetadata } from './bank-detail';

@Injectable({
  providedIn: 'root'
})
export class BankDetailService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/bank-detail`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<BankDetailMetadata> {
    return this.http.get<BankDetailMetadata>(BankDetailService.metadataEndpoint).pipe(
      shareReplay(1)
    );
  }
}
