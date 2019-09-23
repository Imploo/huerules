import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcelinksComponent } from './resourcelinks.component';
import {MockComponent} from 'ng-mocks';
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle, MatIcon} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResourcelinksComponent', () => {
  let component: ResourcelinksComponent;
  let fixture: ComponentFixture<ResourcelinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        ResourcelinksComponent,
        MockComponent(MatIcon),
        MockComponent(MatCardTitle),
        MockComponent(MatCardSubtitle),
        MatCardContent,
        MatCard
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
