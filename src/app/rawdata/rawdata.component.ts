import {Component} from '@angular/core';
import {HueService} from '../hue/hue.service';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.scss']
})
export class RawDataComponent {

  constructor(public hueService: HueService) { }

}
