import {Injectable} from '@angular/core';
import {EntityService} from '../entities/entity.service';
import {ActionEntity} from '../entities/actionEntity';

@Injectable({
  providedIn: 'root'
})
export class ActionService extends EntityService<ActionEntity> {

  protected parseEntities(items: any, type: string): ActionEntity[] {
    return Object.keys(items).map(i => {
      const item = items[i];
      const properties = type === 'groups'
        ? Object.keys(item.action)
        : Object.keys(item.state);
      return new ActionEntity(item.name, +i, type, properties);
    });
  }
}
