import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Help } from './help';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/authentications`;

  constructor(private http: HttpClient) { }

  getMetadata(type: string): Observable<Help> {
    return this.http.get<{ctaHelp: Help}>(`${HelpService.metadataEndpoint}/${type}`).pipe(
      map(response => response.ctaHelp)
    )
  }

}
