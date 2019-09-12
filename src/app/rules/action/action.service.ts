import {Injectable} from '@angular/core';
import {EntityService} from '../entities/entity.service';
import {ActionEntity} from '../entities/actionEntity';
import {Types} from '../../api/types.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService extends EntityService<ActionEntity> {

  protected getPresetEntities(): ActionEntity[] {
    return [new ActionEntity(
      'All Groups',
      0,
      Types.groups,
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

  protected parseEntities(items: any, type: Types): ActionEntity[] {
    return Object.keys(items).map(i => {
      const item = items[i];
      const properties = type === Types.groups
        ? Object.keys(item.action).concat([ 'transitiontime'])
        : Object.keys(item.state);
      return new ActionEntity(item.name, +i, type, properties);
    });
  }
}
