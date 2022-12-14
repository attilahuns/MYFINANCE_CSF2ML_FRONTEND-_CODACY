import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentMetadata, TranscodingTable } from './document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  static readonly metadataEndpoint = `${environment.cms.endpoint}/api/documents`;
  static readonly transcodingTableEndpoint = `${environment.cms.endpoint}/api/transcoding-table`;
  readonly metadata$ = this.http.get<DocumentMetadata>(DocumentService.metadataEndpoint).pipe(
    shareReplay(1),
  );

  readonly transcodingtTable$ = this.http.get<TranscodingTable[]>(DocumentService.transcodingTableEndpoint).pipe(
    shareReplay(1),
  );

  constructor(private http: HttpClient) { }

}
