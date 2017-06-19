import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsAPIService } from './hackernews-api.service';

describe('HackerNewsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsAPIService]
    });
  });

  it('should ...', inject([HackerNewsAPIService], (service: HackerNewsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
