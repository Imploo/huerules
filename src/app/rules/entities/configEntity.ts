import {BaseEntity} from './baseEntity';

export class ConfigEntity extends BaseEntity<ConfigEntity> {
  getAddress(): string {
    return `/${this.type}/${this.selectedProperty}`;
  }

  public clone() {
    return new ConfigEntity(
      this.name,
      this.id,
      this.type,
      this.properties
    );
  }
}
