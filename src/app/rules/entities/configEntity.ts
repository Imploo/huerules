import {BaseEntity} from './baseEntity';

export class ConfigEntity extends BaseEntity {
  getAddress(): string {
    return `${this.type}/${this.selectedProperty}`;
  }
}
