import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestMetadata } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/requests`;
  readonly metadata$ = this.http.get<RequestMetadata>(RequestService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
