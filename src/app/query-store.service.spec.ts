import { TestBed, inject } from '@angular/core/testing';

import { QueryStoreService } from './query-store.service';

describe('QueryStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryStoreService]
    });
  });

  it('should be created', inject([QueryStoreService], (service: QueryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
