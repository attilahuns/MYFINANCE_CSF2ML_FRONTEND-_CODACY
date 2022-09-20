import { TestBed } from '@angular/core/testing';

import { FooterPageContentService } from './footer-page-content.service';

describe('FooterPageContentService', () => {
  let service: FooterPageContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterPageContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
