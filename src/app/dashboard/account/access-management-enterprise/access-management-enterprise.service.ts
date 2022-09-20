import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs';
import { AccessManagementEnterpriseMetadata } from './access-management-entreprise';

@Injectable({
  providedIn: 'root'
})
export class AccessManagementEnterpriseService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/access-management-enterprise`;
  readonly metadata$ = this.http.get<AccessManagementEnterpriseMetadata>(AccessManagementEnterpriseService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }
}
