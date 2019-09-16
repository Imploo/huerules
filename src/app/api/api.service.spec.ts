import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import {IResourcelink} from './models/resourcelink.model';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should create typed dtos from response', inject([ApiService], (service: ApiService) => {
    const resourceLinks = {
      1: {
        name: 'test1',
        links: ['link1', 'link2']
      },
      2: {
        name: 'test2',
        links: ['link1', 'link2']
      }
    };

    const result = service.responseObjectToTypesArray<IResourcelink>(resourceLinks);

    expect(result.length).toBe(2);
    expect(result[1].id).toBe(2);
  }));
});
