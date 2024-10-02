import { TestBed } from '@angular/core/testing';

import { ServstockService } from './servstock.service';

describe('ServstockService', () => {
  let service: ServstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
