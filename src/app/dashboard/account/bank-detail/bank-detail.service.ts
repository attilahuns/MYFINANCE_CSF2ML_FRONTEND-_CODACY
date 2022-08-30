import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankDetailMetadata } from './bank-detail';

@Injectable({
  providedIn: 'root'
})
export class BankDetailService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/bank-detail`;
  readonly metadata$ = this.http.get<BankDetailMetadata>(BankDetailService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
