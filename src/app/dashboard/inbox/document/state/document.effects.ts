import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Document } from '../document';
import * as DocumentAction from './document.actions';
import { DocumentService } from '../document.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentEffect {

  documents: Document[] = [
    {documentType: "Invoice monthly", date: "12/05/2021", financeProduct: "Personal Contract",contract: "100P0610206",vehicle: "3008 Peugeot",registrationNumber: "ww-342-ZE",  download: "",view: ""
    },
    {documentType: "Death insurance", date: "21/01/2016", financeProduct: "Personal Finance", contract: "100P0610206", vehicle: "CS Citroén", registrationNumber: "AA-212-ZB", download: "", view: ""
    },
    {documentType: "Welcome letter",date: "30/05/2016", financeProduct: "Personal Contract", contract: "100P0610206","vehicle": "CS Citroén", registrationNumber: "TY-456-RF", download: "", view: ""
    },
    {documentType: "General sales", date: "21/05/2016", financeProduct: "Personal Contract ", contract: "100P0610206","vehicle": "CS Citroén",  registrationNumber: "TY-456-RF",  download: "", view: ""
    },
    {documentType: "Invoice", date: "21/05/2016", financeProduct: "Personal Contract ", contract: "100P0610206","vehicle": "CS Citroén", registrationNumber: "TY-456-RF", download: "",  view: ""
    },
    {documentType: "Invoice", date: "21/05/2016", financeProduct: "Personal Contract ", contract: "100P0610206","vehicle": "CS Citroén", registrationNumber: "TY-456-RF", download: "",  view: ""
    },
    {documentType: "Invoice", date: "21/05/2016", financeProduct: "Personal Contract ", contract: "100P0610206","vehicle": "CS Citroén", registrationNumber: "TY-456-RF", download: "",  view: ""
    },
  ];

  loaddocumentItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(DocumentAction.loadDocument),
      mergeMap(() => of(this.documents).pipe(
        map(documents => DocumentAction.loadDocumentSuccess({documents})),
        catchError(error => {
          return of(DocumentAction.loadDocumentFailure({error}))
        })
      ))
    )
  });

  loaddocumentMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(DocumentAction.loadDocumentMetadata),
      mergeMap(() => this.documentService.metadata$.pipe(
        map(metadata => DocumentAction.loadDocumentMetadataSuccess({metadata})),
        catchError(error => {
          return of(DocumentAction.loadDocumentMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private documentService: DocumentService) { }
}
