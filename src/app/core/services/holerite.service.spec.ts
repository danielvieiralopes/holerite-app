import { TestBed } from '@angular/core/testing';

import { HoleriteService } from './holerite.service';

describe('HoleriteService', () => {
  let service: HoleriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoleriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
