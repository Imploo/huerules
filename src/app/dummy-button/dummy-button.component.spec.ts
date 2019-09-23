import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyButtonComponent } from './dummy-button.component';
import {ApiService} from '../api/api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DummyButtonComponent', () => {
  let component: DummyButtonComponent;
  let fixture: ComponentFixture<DummyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DummyButtonComponent ],
      providers: [
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
