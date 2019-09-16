import { TestBed, inject } from '@angular/core/testing';

import { BackupService } from './backup.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BackupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackupService]
    });
  });

  it('should be created', inject([BackupService], (service: BackupService) => {
    expect(service).toBeTruthy();
  }));
});
