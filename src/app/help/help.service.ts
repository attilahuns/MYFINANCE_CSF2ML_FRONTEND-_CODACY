import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications`;

  constructor(private http: HttpClient) { }

  getHelpContent(type: string): Observable<any> {
    return this.http.get<any>(`${HelpService.metadataEndpoint}/${type}`).pipe(
      map(response => response.ctaHelp)
    )
  }
}
