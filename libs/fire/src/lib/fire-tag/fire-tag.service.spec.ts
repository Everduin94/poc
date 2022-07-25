import { TestBed } from '@angular/core/testing';

import { FireTagService } from './fire-tag.service';

describe('FireTagService', () => {
  let service: FireTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
