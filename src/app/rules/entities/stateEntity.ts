import {BaseEntity} from './baseEntity';

export class StateEntity extends BaseEntity<StateEntity> {
  getAddress(): string {
    return `/${this.type}/${this.id}/state/${this.selectedProperty}`;
  }

  public clone() {
    return new StateEntity(
      this.name,
      this.id,
      this.type,
      this.properties
    );
  }
}
