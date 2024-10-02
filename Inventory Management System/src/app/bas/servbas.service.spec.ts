import { TestBed } from '@angular/core/testing';

import { ServbasService } from './servbas.service';

describe('ServbasService', () => {
  let service: ServbasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServbasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
