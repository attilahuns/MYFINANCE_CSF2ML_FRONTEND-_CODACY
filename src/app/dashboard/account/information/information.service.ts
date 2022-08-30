import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InformationMetadata } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/information`;
  readonly metadata$ = this.http.get<InformationMetadata>(InformationService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
