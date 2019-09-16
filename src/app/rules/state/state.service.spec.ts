import { TestBed, inject } from '@angular/core/testing';

import { StateService } from './state.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateService]
    });
  });

  it('should be created', inject([StateService], (service: StateService) => {
    expect(service).toBeTruthy();
  }));
});
