import {BaseEntity} from './baseEntity';

export class ActionEntity extends BaseEntity {
  getAddress(): string {
    return `${this.type}/${this.id}/${this.getActionType()}`;
  }

  private getActionType(): string {
    return this.type === 'groups' ? 'action' : 'state';
  }
}
