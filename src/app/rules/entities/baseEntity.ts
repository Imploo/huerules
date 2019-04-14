import {Types} from '../../api/types.model';

export abstract class BaseEntity {
  constructor(
    public name: string,
    public id: number,
    public type: Types,
    public properties: string[],
    public selectedProperty: string = null
  ) { }

  public abstract getAddress(): string;
}
