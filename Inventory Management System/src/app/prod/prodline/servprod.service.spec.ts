import { TestBed } from '@angular/core/testing';

import { ServprodService } from './servprod.service';

describe('ServprodService', () => {
  let service: ServprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
