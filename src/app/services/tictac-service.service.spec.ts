import { TestBed } from '@angular/core/testing';

import { TictacServiceService } from './tictac-service.service';

describe('TictacServiceService', () => {
  let service: TictacServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TictacServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
