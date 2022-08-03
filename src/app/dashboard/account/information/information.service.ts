import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InformationMetadata } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/information`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<InformationMetadata> {
    return this.http.get<InformationMetadata>(InformationService.metadataEndpoint);
  }

}
