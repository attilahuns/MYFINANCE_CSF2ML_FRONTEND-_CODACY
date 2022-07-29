import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentMetadata } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/documents`;

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<DocumentMetadata> {
    return this.http.get<DocumentMetadata>(DocumentService.metadataEndpoint).pipe(
      shareReplay(1)
    );
  }
}
