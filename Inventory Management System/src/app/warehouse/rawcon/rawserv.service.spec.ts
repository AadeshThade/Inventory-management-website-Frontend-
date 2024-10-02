import { TestBed } from '@angular/core/testing';

import { RawservService } from './rawserv.service';

describe('RawservService', () => {
  let service: RawservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
