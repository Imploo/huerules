import {BaseEntity} from './baseEntity';

export class StateEntity extends BaseEntity {
  getAddress(): string {
    return `/${this.type}/${this.id}/state/${this.selectedProperty}`;
  }
}
