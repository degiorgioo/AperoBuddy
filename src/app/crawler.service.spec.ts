import { TestBed, inject } from '@angular/core/testing';

import { CrawlerService } from './crawler.service';

describe('CrawlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawlerService]
    });
  });

  it('should be created', inject([CrawlerService], (service: CrawlerService) => {
    expect(service).toBeTruthy();
  }));
});
