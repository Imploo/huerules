import {Component, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RawDataComponent {

  constructor(public apiService: ApiService) { }

  public getJson(data: any): string {
    return JSON.stringify(data);
  }

}
