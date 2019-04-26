import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jsonviewer',
  templateUrl: './jsonviewer.component.html',
  styleUrls: ['./jsonviewer.component.scss']
})
export class JsonviewerComponent {
  @Input()
  public data: any;
}
