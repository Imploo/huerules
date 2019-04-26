import {Component, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.scss']
})
export class RawDataComponent {

  constructor(public apiService: ApiService) { }

}
