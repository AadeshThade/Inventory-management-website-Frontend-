import { TestBed } from '@angular/core/testing';

import { ServsalesService } from './servsales.service';

describe('ServsalesService', () => {
  let service: ServsalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServsalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
