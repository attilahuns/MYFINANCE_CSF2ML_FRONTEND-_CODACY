import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessManagementMetadata } from './access-management';

@Injectable({
  providedIn: 'root'
})
export class AccessManagementService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/access-management`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<AccessManagementMetadata>{
    return this.http.get<AccessManagementMetadata>(AccessManagementService.metadataEndpoint);
  }
}
