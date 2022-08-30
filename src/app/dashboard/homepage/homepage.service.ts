import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomepageMetada } from './homepage';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/homepage`;
  readonly metadata$ = this.http.get<HomepageMetada>(HomepageService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
