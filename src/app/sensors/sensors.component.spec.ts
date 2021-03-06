import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsComponent } from './sensors.component';
import {MockComponent} from 'ng-mocks';
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle, MatIcon} from '@angular/material';
import {JsonviewerComponent} from '../jsonviewer/jsonviewer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        SensorsComponent,
        MockComponent(MatIcon),
        MockComponent(MatCardTitle),
        MockComponent(MatCardSubtitle),
        MockComponent(JsonviewerComponent),
        MatCardContent,
        MatCard
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
