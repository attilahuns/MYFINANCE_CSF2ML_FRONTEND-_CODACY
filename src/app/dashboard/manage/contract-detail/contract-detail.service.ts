import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContractDetailMetadata } from './contractDetail';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/agreement-details`;
  readonly metadata$ = this.http.get<ContractDetailMetadata>(ContractDetailService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
