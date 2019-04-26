import {Component, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SensorsComponent {

  constructor(public apiService: ApiService) { }

  public getJson(data: any): string {
    return JSON.stringify(data);
  }

}
