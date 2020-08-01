import { TestBed } from '@angular/core/testing';

import { StepsProgressService } from './steps-progress.service';

describe('StepsProgressService', () => {
  let service: StepsProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
