import { TestBed } from '@angular/core/testing';

import { DosenService } from './dosen.service';

describe('DosenService', () => {
  let service: DosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
