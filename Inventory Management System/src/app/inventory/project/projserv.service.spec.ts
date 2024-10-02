import { TestBed } from '@angular/core/testing';

import { ProjservService } from './projserv.service';

describe('ProjservService', () => {
  let service: ProjservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
