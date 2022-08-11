import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountMetadata } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/general-infos`;

  constructor(private http: HttpClient) { }

  getMetadata(page: string): Observable<AccountMetadata> {
    return this.http.get<AccountMetadata>(`${AccountService.metadataEndpoint}/${page}`);
  }

}
