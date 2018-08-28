import { Injectable } from '@angular/core';
import {EntityService} from '../entities/entity.service';
import {StateEntity} from '../entities/stateEntity';

@Injectable({
  providedIn: 'root'
})
export class StateService extends EntityService<StateEntity> {

  protected parseEntities(items: any, type: string): StateEntity[] {
    return Object.keys(items).map(i => {
      const item = items[i];
      return new StateEntity(item.name, +i, type, Object.keys(item.state));
    });
  }
}
