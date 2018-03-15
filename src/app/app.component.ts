import { Component } from '@angular/core';
import { RulesService } from './rules/rules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RulesService]
})
export class AppComponent {
  title = 'app';
}
