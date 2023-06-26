import { TestBed } from '@angular/core/testing';

import { TravelDestinationService } from './travel-destination.service';

describe('TravelDestinationService', () => {
  let service: TravelDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
