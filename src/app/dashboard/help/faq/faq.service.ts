import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { IS_LOADER_NOT_TRIGGERED } from 'src/app/core/interceptors/loader-interceptor.service';
import { environment } from 'src/environments/environment';
import { FaqMetadata, FaqVote } from './faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/faqs`;
  static readonly consultationEndpoint = `${environment.cms.endpoint}/api/faqs/{id}/consultations`;
  static readonly voteEndpoint = `${environment.cms.endpoint}/api/faqs/{id}/votes/{vote}`;
  private httpContext = {
    context: new HttpContext().set(IS_LOADER_NOT_TRIGGERED, true)
  }
  readonly metadata$ = this.http.get<FaqMetadata>(FaqService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

  consulte(id: number): void {
    const endpoint = FaqService.consultationEndpoint.replace('{id}', `${id}`);
    this.http.put(endpoint, {}, this.httpContext).subscribe();
  }
  vote(id: number, vote: FaqVote): void {
    const endpoint = FaqService.voteEndpoint.replace('{id}', `${id}`).replace('{vote}', `${vote}`);
    this.http.put(endpoint, {}, this.httpContext).subscribe();
  }

}
