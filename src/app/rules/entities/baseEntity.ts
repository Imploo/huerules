import {Types} from '../../api/types.model';
import {DeepCopyHelper} from '../../deep-copy-helper';

export abstract class BaseEntity<T> {
  constructor(
    public name: string,
    public id: number,
    public type: Types,
    public properties: string[],
    public selectedProperty: string = null
  ) { }

  public abstract getAddress(): string;
  public clone(): BaseEntity<T> {
    return DeepCopyHelper.copy(this);
  }
}
