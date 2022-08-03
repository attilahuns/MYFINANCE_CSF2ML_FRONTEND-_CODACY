import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactMetadata } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/contact-us`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<ContactMetadata> {
    return this.http.get<ContactMetadata>(ContactService.metadataEndpoint);
  }
}
