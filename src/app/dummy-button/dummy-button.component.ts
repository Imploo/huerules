import {Component} from '@angular/core';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-dummy-button',
  templateUrl: './dummy-button.component.html',
  styleUrls: ['./dummy-button.component.scss']
})
export class DummyButtonComponent {

  constructor(private apiService: ApiService) { }

  loadDummy() {
    this.apiService.loadDummy();
  }
}
