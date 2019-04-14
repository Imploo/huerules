import {BaseEntity} from './baseEntity';
import {Types} from '../../api/types.model';

export class ActionEntity extends BaseEntity {
  getAddress(): string {
    return `/${this.type}/${this.id}/${this.getActionType()}`;
  }

  private getActionType(): string {
    return this.type === Types.groups ? 'action' : 'state';
  }
}
