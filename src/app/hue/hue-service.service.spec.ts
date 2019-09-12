import { TestBed } from '@angular/core/testing';

import { HueService } from './hue.service';

describe('HueServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HueService = TestBed.get(HueService);
    expect(service).toBeTruthy();
  });
});
