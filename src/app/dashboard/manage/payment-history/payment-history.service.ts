import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMetadata } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/payment-history`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<PaymentMetadata> {
    return this.http.get<PaymentMetadata>(PaymentHistoryService.metadataEndpoint);
  }

}
