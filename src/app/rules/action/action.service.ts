import {Injectable} from '@angular/core';
import {EntityService} from '../entities/entity.service';
import {ActionEntity} from '../entities/actionEntity';

@Injectable({
  providedIn: 'root'
})
export class ActionService extends EntityService<ActionEntity> {

  protected getPresetEntities(): ActionEntity[] {
    return [new ActionEntity(
      'All Groups',
      0,
      'groups',
      [
        'on',
        'bri',
        'ct',
        'transitiontime',
        'hue',
        'scene',
        'bri_inc',
        'sat_inc',
        'hue_inc',
        'ct_inc'
      ]
    )];
  }

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
