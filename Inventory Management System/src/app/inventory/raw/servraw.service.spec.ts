import { TestBed } from '@angular/core/testing';

import { ServrawService } from './servraw.service';

describe('ServrawService', () => {
  let service: ServrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
