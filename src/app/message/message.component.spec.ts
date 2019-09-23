import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageComponent} from './message.component';
import {MockComponent} from 'ng-mocks';
import {MatExpansionModule, MatIcon} from '@angular/material';
import {JsonviewerComponent} from '../jsonviewer/jsonviewer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, HttpClientTestingModule],
      declarations: [
        MessageComponent,
        MockComponent(MatIcon),
        MockComponent(JsonviewerComponent),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
