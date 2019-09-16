import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MockComponent} from 'ng-mocks';
import {MenuComponent} from './menu/menu.component';
import {MessageComponent} from './message/message.component';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockComponent(MenuComponent),
        MockComponent(MessageComponent)
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
