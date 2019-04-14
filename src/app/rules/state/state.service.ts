import {Injectable} from '@angular/core';
import {EntityService} from '../entities/entity.service';
import {StateEntity} from '../entities/stateEntity';
import {ConfigEntity} from '../entities/configEntity';
import {Types} from '../../api/types.model';

@Injectable({
  providedIn: 'root'
})
export class StateService extends EntityService<StateEntity> {

  protected getPresetEntities(): StateEntity[] {
    return [
      new ConfigEntity(
        'config',
        -1,
        Types.config,
        ['localtime']
      ),
      new StateEntity(
        'All Groups',
        0,
        Types.groups,
        ['any_on', 'all_on']
      )
    ];
  }

  protected parseEntities(items: any, type: Types): StateEntity[] {
    return Object.keys(items).map(i => {
      const item = items[i];
      return new StateEntity(item.name, +i, type, Object.keys(item.state));
    });
  }
}
