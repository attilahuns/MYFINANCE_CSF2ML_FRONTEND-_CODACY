import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaqMetadata } from './faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/faqs`;
  readonly metadata$ = this.http.get<FaqMetadata>(FaqService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }
}
