import {Component, ViewEncapsulation} from '@angular/core';
import {RulesService} from './rules/rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RulesService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
