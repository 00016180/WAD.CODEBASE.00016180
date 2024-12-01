import { TestBed } from '@angular/core/testing';

import { ServiceTaskTrackerService } from './service-task-tracker.service';

describe('ServiceTaskTrackerService', () => {
  let service: ServiceTaskTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTaskTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
