import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Types} from '../api/types.model';
import {map} from 'rxjs/operators';
import {ApiService} from '../api/api.service';
import {IRule} from '../api/models/rule.model';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent {

  constructor(private apiService: ApiService) {
  }

  getSensors(): Observable<any> {
    return this.apiService.getType(Types.sensors);
  }

  getKeys(data: any): number[] {
    return Object.keys(data)
      .map(key => +key);
  }

  sensorNotUsed(sensorId: number): Observable<boolean> {
    return this.apiService.getType(Types.rules)
      .pipe(
        map(rules =>
          !(rules
          && Object.keys(rules)
            .map(key => rules[key])
            .some((rule: IRule) =>
              rule.conditions
                && rule.conditions.some(condition =>
                condition.address && condition.address.startsWith(`/sensors/${sensorId}`)))
        ))
      );
  }

  deleteSensor(sensorKey: number) {
    if (sensorKey > -1 && confirm('Really delete this sensor?')) {
      this.apiService.delete(Types.sensors, sensorKey)
        .subscribe(() => this.apiService.refresh());
    }
  }
}
