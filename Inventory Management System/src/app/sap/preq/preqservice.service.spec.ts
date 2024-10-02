import { TestBed } from '@angular/core/testing';

import { PreqserviceService } from './preqservice.service';

describe('PreqserviceService', () => {
  let service: PreqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
