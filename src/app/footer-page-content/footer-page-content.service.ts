import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FooterPageContent } from './footer-page-content';

@Injectable({
  providedIn: 'root'
})
export class FooterPageContentService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/footer`;

  constructor(private http: HttpClient) { }

  getMetadata(footer: string): Observable<FooterPageContent> {
    return this.http.get<FooterPageContent>(`${FooterPageContentService.metadataEndpoint}/${footer}`);
  }
}
