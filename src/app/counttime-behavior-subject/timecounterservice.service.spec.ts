import { TestBed } from '@angular/core/testing';

import { TimecounterserviceService } from './timecounterservice.service';

describe('TimecounterserviceService', () => {
  let service: TimecounterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimecounterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
