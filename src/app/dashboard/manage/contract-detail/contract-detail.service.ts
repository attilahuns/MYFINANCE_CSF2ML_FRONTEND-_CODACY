import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContractDetailMetadata } from './contractDetail';

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/agreement-details`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<ContractDetailMetadata> {
    return this.http.get<ContractDetailMetadata>(ContractDetailService.metadataEndpoint);
  }

}
