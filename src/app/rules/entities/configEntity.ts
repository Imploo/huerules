import {BaseEntity} from './baseEntity';

export class ConfigEntity extends BaseEntity<ConfigEntity> {
  getAddress(): string {
    return `/${this.type}/${this.selectedProperty}`;
  }
}
