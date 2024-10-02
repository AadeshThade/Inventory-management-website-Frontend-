import { TestBed } from '@angular/core/testing';

import { PurdetService } from './purdet.service';

describe('PurdetService', () => {
  let service: PurdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
