import { TestBed } from '@angular/core/testing';

import { DictonaryServiceService } from './dictonary-service.service';

describe('DictonaryServiceService', () => {
  let service: DictonaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictonaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
