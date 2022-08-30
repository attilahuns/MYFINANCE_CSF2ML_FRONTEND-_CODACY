import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessManagementMetadata } from './access-management';

@Injectable({
  providedIn: 'root'
})
export class AccessManagementService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/access-management`;
  readonly metadata$ = this.http.get<AccessManagementMetadata>(AccessManagementService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
