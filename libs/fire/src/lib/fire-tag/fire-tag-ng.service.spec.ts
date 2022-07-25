import { TestBed } from '@angular/core/testing';

import { FireTagNgService } from './fire-tag-ng.service';

describe('FireTagNgService', () => {
  let service: FireTagNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireTagNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
