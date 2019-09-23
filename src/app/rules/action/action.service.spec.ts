import {inject, TestBed} from '@angular/core/testing';

import {ActionService} from './action.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActionService]
    });
  });

  it('should be created', inject([ActionService], (service: ActionService) => {
    expect(service).toBeTruthy();
  }));
});
